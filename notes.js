console.log("Starting notes.js..");

/* requiere Node API */
const fs = require('fs');

let fetchNotes = () => {
  try {
    /* try Read notes data before */
    let noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    console.log('notes not found!');
    return [];
  }
};

let saveNotes = (notes) => {
  /* try to save notes */
  try {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    console.log('successfully added new note!');
  } catch (err) {
    console.log('opps! something error with the message: '+ err);
  }
};

let add = (title, body) => {
  /* get the notes */
  let notes = fetchNotes();
  /* declare type of object */
  let note = {
    title,
    body
  }
  /* handle the duplicate notes */
  let duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length > 0) {
    return undefined
  }
  /* try to add new notes */
  notes.push(note);
  saveNotes(notes);
  return note;
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