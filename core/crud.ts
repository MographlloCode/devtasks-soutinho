import fs from 'fs'; // ES6
const DB_FILE_PATH = './core/db'

console.log('CRUD')

function create(content: string) {
  fs.writeFileSync(DB_FILE_PATH, content)
  return content
}

create('Crud2')