# form-validation

[![Build Status](https://travis-ci.org/YutangShi/form-validation.svg?branch=master)](https://travis-ci.org/YutangShi/form-validation.svg?branch=master)
[![npm version](https://badge.fury.io/js/%40yutangshi%2Fform-validation.svg)](https://badge.fury.io/js/%40yutangshi%2Fform-validation.svg)
[![npm](https://img.shields.io/npm/dt/date2obj.svg?style=flat-square)](https://www.npmjs.com/package/date2obj)
[![Greenkeeper badge](https://badges.greenkeeper.io/tigercosmos/date2obj.svg)](https://greenkeeper.io/)

Validate data fields formet in JavaScript

## Usage

```bash
npm i form-validation --save
```

```js
const form = new formValidation(); // Get validate object

const res = form.userName("Allen"); // Validate user name input.
// response format
// { 
//	status: 200, 
//	message: ""
// }

const res = form.mobile("Allen"); // Validate mobile input.
// response format
// { 
//	status: 512, 
//	message: "您輸入的手機格式不正確。"
// }


```


## License

MIT
