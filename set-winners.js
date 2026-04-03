const fs = require('fs');

// 1. Read and parse the CSV (using a relative path)
const csvData = fs.readFileSync('NUSCAS Anime Awards - Votes.csv', 'utf-8');

// Basic CSV parser function to handle commas safely
function parseCSV(text) {
    const lines = text.trim().split('\n');
    return lines.map(line => {
        const result = [];
        let current = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') inQuotes = !inQuotes;
            else if (char === ',' && !inQuotes) {
                result.push(current.trim());
                current = '';
            } else current += char;
        }
        result.push(current.trim());
        return result;
    });
}

const rows = parseCSV(csvData);
const headers = rows[0];

// 2. Tally the votes for each category
const tallies = {};
headers.forEach(h => {
    if (h !== 'Timestamp') tallies[h] = {};
});

for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    // Skip empty lines
    if (row.length < headers.length) continue; 
    
    headers.forEach((header, index) => {
        if (header !== 'Timestamp' && row[index]) {
            const vote = row[index];
            tallies[header][vote] = (tallies[header][vote] || 0) + 1;
        }
    });
}

// 3. Determine the winners (highest vote count)
const winners = {};
for (const category in tallies) {
    let max = 0;
    let winner = null;
    for (const nominee in tallies[category]) {
        if (tallies[category][nominee] > max) {
            max = tallies[category][nominee];
            winner = nominee;
        }
    }
    winners[category] = winner;
}

// 4. Update the data.js file
let dataJs = fs.readFileSync('js/data.js', 'utf-8');

for (const [category, winner] of Object.entries(winners)) {
    if (!winner) continue;
    
    // Step A: Strip quotes from the category name so we can fuzzy-match it
    // (This fixes the "Must Protect At All Costs" mismatch)
    const safeCategory = category.replace(/["']/g, '');
    const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedCat = escapeRegex(safeCategory);
    
    // Step B: Bulletproof Regex
    // 1. Matches the `name:` line loosely, absorbing any quotes around it.
    // 2. Uses `[^{}]*?` to safely scan down to the `winner:` line without jumping into the next category.
    // 3. `(?:null|"[^"]*"|'[^']*')` correctly matches null, or any string that has colons/apostrophes.
    const regex = new RegExp(`(name:\\s*["'].*?${escapedCat}.*?["'],[^{}]*?winner:\\s*)(?:null|"[^"]*"|'[^']*')`, 'g');
    
    // Step C: Replace using a function (safest way to inject strings in JS)
    dataJs = dataJs.replace(regex, (match, p1) => {
        return `${p1}"${winner}"`;
    });
}

// 5. Save changes
fs.writeFileSync('js/data.js', dataJs, 'utf-8');
console.log('✅ Successfully calculated winners and updated js/data.js!');