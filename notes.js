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
  /* fetch All notes */
  let notes = fetchNotes();
  /* filter notes without that title */
  let filteredNotes = notes.filter((note) => note.title !== title);
  /* save the notes */
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

let update = (title) => {
  console.log('Updating dile ', title)
}

let read = (title) => {
  let notes = fetchNotes();
  /* search the note! */
  let note = notes.find((note) => note.title === title);
  /* is Avaliable? */
  if(note === undefined) {
    return false;
  } 
  return note;
}

let getNotes = () => {
  let notes = fetchNotes();
  if(notes.length === 0) {
    return console.log("You haven't Notes!");
  }
  console.log(`You have ${notes.length} note(s)`);
  notes.forEach((note) => printNote(note));
}

let printNote = (note) => {
  console.log("---")
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  add,
  remove,
  update,
  read,
  getNotes,
  printNote
}