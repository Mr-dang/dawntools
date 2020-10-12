const fs = require('fs');
const path = require('path');

const jsondataDirectory = path.join(process.cwd(), 'jsondata');

export function getToolList() {
  const fullpath = path.join(jsondataDirectory, 'home.json');
  const content = fs.readFileSync(fullpath, 'utf8');
  return typeof content === 'string' ? JSON.parse(content) : {};
}