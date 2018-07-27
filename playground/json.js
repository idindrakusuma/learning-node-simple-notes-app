const fs = require('fs')

var originalNote = {
  title: 'Some title',
  body: 'Some Body'
}


/* Original notes string */
let originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

/* Note string */
var noteString = fs.readFileSync('notes.json');

/* the real content */
let note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)