const fs = require("fs");
const path = require("path");

// Recursively get all JS/TS/JSX/TSX files
function getFiles(dir, files = []) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else if (/\.(js|jsx|ts|tsx)$/.test(fullPath)) {
      files.push(fullPath);
    }
  });
  return files;
}

// Fix HTML-style comments in JSX
function fixComments(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  // Matches <!-- ... -->
  const regex = /<!--([\s\S]*?)-->/g;

  if (regex.test(content)) {
    const fixed = content.replace(regex, (match, p1) => `{/*${p1}*/}`);
    fs.writeFileSync(filePath, fixed, "utf-8");
    console.log(`Fixed comments in: ${filePath}`);
  }
}

const projectRoot = path.resolve("./app"); // scan only /app
const files = getFiles(projectRoot);

files.forEach(fixComments);

console.log("✅ Finished scanning and fixing JSX comments.");
