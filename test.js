const formValidation = require('./index');
const assert = require('assert');
const form = new formValidation();


(function testCase() {
    // assert.equal(data1, data2, `not good`);

    // validate user name input
    var res = form.userName("Allen");
    console.log('姓名驗證:' + JSON.stringify(res))
    assert.deepEqual(
        res, { status: 200, message: "" }
    )

    // validate custome message in mobile input 
    var res = form.mobile("0911392A", "mobile input format is not correct.");
    console.log('手機驗證:' + JSON.stringify(res))
    assert.deepEqual(
        res, { status: 512, message: "mobile input format is not correct." }
    )
}())