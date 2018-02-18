# form-validation

[![Build Status](https://travis-ci.org/YutangShi/form-validation.svg?branch=master)](https://travis-ci.org/YutangShi/form-validation.svg?branch=master)
[![npm version](https://badge.fury.io/js/%40yutangshi%2Fform-validation.svg)](https://badge.fury.io/js/%40yutangshi%2Fform-validation.svg)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/@yutangshi/form-validation)
[![Greenkeeper badge](https://badges.greenkeeper.io/yutangshi/form-validation.svg)](https://greenkeeper.io/)

Validate data fields formet in JavaScript

## Usage

```bash
npm i @yutangshi/form-validation --save
```

```js
const formValidation = require('formValidation');
const form = new formValidation(); // Get the validation object

// Validate user name input. 驗證姓名不可為數字或特殊符號。
const res = form.userName("Allen");
// response format
// { 
//	status: 200, 
//	message: ""
// }

// Validate mobile input. 驗證手機號碼必須為09開頭且為10碼
const res = form.mobile("001399302");
// response format
// { 
//	status: 512, 
//	message: "您輸入的手機格式不正確。"
// }

// Validate email input. 驗證Email必須包含＠符號以及.的網域名稱。
const res = form.email("service@com");
// response format
// { 
//	status: 512, 
//	message: "您輸入Email格式不正確。"
// }

// Validate identity card input of Taiwan. 驗證台灣身分證字號。
const res = form.idcard("11233211");
// response format
// { 
//	status: 512, 
//	message: "您輸入身分證字號格式不正確。"
// }


// Validate credit card input with custom message. 驗證信用卡資料格式，套用客製訊息。
const res = form.email("11-2222-2345-2242","卡號不正確。");
// response format
// { 
//	status: 512, 
//	message: "卡號不正確。"
// }
```


## License

MIT
