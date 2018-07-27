# Dokumentasi Belajar Node JS

Daftar yang sudah dipelajari?
- penggunaan API Node (fs, os)
- penggunaan modul pihak ketiga (lodash, yargs)
- penggunaan JSON

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

- JSON
`JSON.stringify` untuk merubah object jadi ke string type, kebalikanya adalah `JSON.parse` yaitu merubah string ke bentuk object

---
MASIH BERLANJUT..
by Indra Kusuma, @idindrakusuma.com