const formValidation = require('./index');
const assert = require('assert');
const form = new formValidation();

(function testUserName(data1, data2) {
    // assert.equal(data1, data2, `not good`);
    const res = form.userName("Allen");
    console.log('姓名驗證:' + JSON.stringify(res))
    assert.deepEqual(
        res, { status: 200, message: "" }
    )
})()


// var res = form.userName('1103F');
// var res = form.email('0913407921@gmail.com');
// console.log('res:' + JSON.stringify(res))