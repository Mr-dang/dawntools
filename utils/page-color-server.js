// import fs from 'fs';
// import path from 'path';
const fs = require('fs');
const path = require('path');

const jsondataDirectory = path.join(process.cwd(), 'jsondata');

export function getColors() {
  const fullpath = path.join(jsondataDirectory, 'color.json');
  const content = fs.readFileSync(fullpath, 'utf8');
  return typeof content === 'string' ? JSON.parse(content) : {};
}