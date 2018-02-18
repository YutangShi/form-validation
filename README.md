# form-validation

[![Build Status](https://travis-ci.org/tigercosmos/date2obj.svg?branch=master)](https://travis-ci.org/tigercosmos/date2obj)
[![npm version](https://badge.fury.io/js/date2obj.svg)](https://badge.fury.io/js/date2obj)
[![npm](https://img.shields.io/npm/dt/date2obj.svg?style=flat-square)](https://www.npmjs.com/package/date2obj)
[![Greenkeeper badge](https://badges.greenkeeper.io/tigercosmos/date2obj.svg)](https://greenkeeper.io/)

Validate data fields formet in JavaScript

## Usage

```bash
npm i form-validation --save
```

```js
var dataValid new dataValidation() // Get validate object
const res = form.userName("Allen");
console.log('姓名驗證:' + JSON.stringify(res))
assert.deepEqual(
    res, { status: 200, message: "" }
)
```


## License

MIT
