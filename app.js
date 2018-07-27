/* load the module */
const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

/* load own module */
const notes = require('./notes')

console.log('Starting app..')

const argv = yargs.argv;
console.log(argv);

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
  } else if (command === 'create') {
    notes.add(argv.title, argv.body);
  } else {
    console.log('command not recognized!')
  }
}