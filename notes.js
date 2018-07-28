console.log("Starting notes.js..");

/* requiere Node API */
const fs = require('fs');

let add = (title, body) => {
  /* declare the array */
  let notes = [];
  /* declare type of object */
  let note = {
    title,
    body
  }
  /* Read notes data before */
  try {
    let noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  } catch (e) {
    console.log('notes not found!')
  }
  /* handle the duplicate notes */
  let duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0) {
     /* try to add new notes */
    try {
      notes.push(note);
      /* convert JSON to string */
      fs.writeFileSync('notes-data.json', JSON.stringify(notes));
      console.log('successfully added new note!');
    } catch (e) {
      console.log('opps! something error with the message: '+ e);
    } 
  } else {
    console.log("can't add new notes, because title was duplicated!");
  }
}

let remove = (title) => {
  console.log('Deleting file..', title)
}

let update = (title) => {
  console.log('Updating dile ', title)
}

let read = (title) => {
  console.log('Reading file ', title);
}

module.exports = {
  add,
  remove,
  update,
  read
}