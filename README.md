# form-validation

[![Build Status](https://travis-ci.org/tigercosmos/date2obj.svg?branch=master)](https://travis-ci.org/tigercosmos/date2obj)
[![npm version](https://badge.fury.io/js/date2obj.svg)](https://badge.fury.io/js/date2obj)
[![npm](https://img.shields.io/npm/dt/date2obj.svg?style=flat-square)](https://www.npmjs.com/package/date2obj)
[![Greenkeeper badge](https://badges.greenkeeper.io/tigercosmos/date2obj.svg)](https://greenkeeper.io/)

Parse Date to Simple Object in JavaScript

## Usage

```bash
npm i form-validation --save
```

```js
date2obj() // Get current time
date2obj(new Date()) // Equal to the first one
date2obj(new Date(1518545575000)) // Put Date object in the function to get that time
```

```js
const date2obj = require('date2obj');

const currentTime = date2obj();
console.log(currentTime);
// Local time
// {
//   year: 'YYYY',
//   month: 'MM',
//   day: 'DD',
//   hour: 'HH',
//   minute: 'mm',
//   second: 'SS'
// }
```

## License

MIT
