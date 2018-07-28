/* load the module */
const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

/* load own module */
const notes = require('./notes')

console.log('Starting app..')

const argv = yargs.argv;

/* Get the command */
let command = argv._[0];
if (command) {
  console.log('Command: ' + command);
  /* check the command */
  if (command === 'read') {
    notes.read(argv.title);
  } else if (command === 'delete') {
    notes.remove();
  } else if (command === 'update') {
    notes.update();
  } else if (command === 'add') {
    let note = notes.add(argv.title, argv.body);
    console.log('---');
    if(note) {
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
    } else {
      console.log("Can't add new note because title was taken!");
    }
    
  } else {
    console.log('command not recognized!')
  }
}