const fs = require('fs');
const path = require('path');

const jsondataDirectory = path.join(process.cwd(), 'jsondata');

export function getMacFontsList() {
  const fullpath = path.join(jsondataDirectory, 'fonts-mac.json');
  const content = fs.readFileSync(fullpath, 'utf8');
  return typeof content === 'string' ? JSON.parse(content) : {};
}

export function getWindowsFontsList() {
  const fullpath = path.join(jsondataDirectory, 'fonts-windows.json');
  const content = fs.readFileSync(fullpath, 'utf8');
  return typeof content === 'string' ? JSON.parse(content) : {};
}
