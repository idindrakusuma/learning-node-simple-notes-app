# Dokumentasi Belajar Node JS

## How to run this project?
- clone to your local machine
- enter the directory project
- install modules using `npm install`
- run project using `node app.js`

## List Command
- `add` new note
```javascript
node app.js add --title="note title" --body="note description" 
```
- `remove` note
```javascript
node app.js remove --title="note title" 
```
---

Daftar yang sudah dipelajari?
- penggunaan API Node (fs, os)
- penggunaan modul pihak ketiga (lodash, yargs)
- penggunaan JSON
- try-catch
- arrow function

## Penting di ingat
- Cara import / require

```javascript
typeVariable namaVariable = require('directory') 
 => const _ = require('lodash')
```

- Cara export module

```javascript
var funcA = () => {
    console.log('function A');
}
var funcB = () => {
    console.log('function B');
}
/* export the modules.. */
module.exports = {
    funcA,
    funcB
}
```

- Handle the error using `try-catch`
```javascript
try {
    /* doing something */
} catch (error) {
    /* IF fails, catch will handle it! */
}

```

- JSON
`JSON.stringify` untuk merubah object jadi ke string type, kebalikanya adalah `JSON.parse` yaitu merubah string ke bentuk object

---
MASIH BERLANJUT..
by Indra Kusuma, @idindrakusuma.com