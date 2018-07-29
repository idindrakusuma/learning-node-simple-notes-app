/* load the module */
const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

/* load own module */
const notes = require('./notes')

/* body option of command */
let titleOption = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
};

let bodyOption = {
  describe: 'Describe of Note',
  demand: true,
  alias: 'b'
};

/* Get the command using YARGS */
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOption,
    body: bodyOption
  })
  .command('list', 'Showing your all notes')
  .command('read', 'Read specific note', {
    title: titleOption
  })
  .command('remove', 'remove the note', {
    title: titleOption
  })
  .command('update', 'Update specific note!', {
    title: titleOption,
    newTitle: {
      describe: 'New Title of Note',
      demand: true,
      alias: 'nT'
    },
    body: bodyOption
  })
  .help()
  .argv;
let command = argv._[0];

/* Check the command! */
if (command) {
  console.log('Command: ' + command);
  /* check the command */
  if (command === 'read') {
    let note = notes.read(argv.title);
    if(note) {
      console.log("Showing your note!");
      notes.printNote(note);
    } else {
      console.log("Note not found!");
    }
  } 
  
  else if (command === 'remove') {
    let removeNote = notes.remove(argv.title);
    /* is note successfuly deleted? */
    let message = removeNote ? `Note with title ${argv.title} was removed!` : 'Note not found!';
    console.log(message);
  } 
  
  else if (command === 'update') {
    let note = notes.update(argv.title, argv.newTitle, argv.body);
    /* is successfull updated? */
    if(note) {
      console.log('successfully updated new note!');
      notes.printNote(note);
    } else {
      console.log("Can't update new note because title not found!");
    }
  } 
  
  else if (command === 'add') {
    let note = notes.add(argv.title, argv.body);
    /* is Note successfuly added? */
    if(note) {
      console.log('successfully added new note!');
      notes.printNote(note);
    } else {
      console.log("Can't add new note because title was taken!");
    }
  } 
  
  else if(command === "list" ) {
    notes.getNotes();
  } 
  
  else {
    console.log('command not recognized!')
  }
}