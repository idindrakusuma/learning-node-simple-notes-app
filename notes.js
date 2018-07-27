console.log("Starting notes.js..");

let add = (title, body) => {
  console.log('Adding note ', title, body)
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