'use strict';

module.exports = class formValidation {

    constructor() {
        this.response = {
            message: "",
            status: 200
        };

        this.messageContext = {
            isString: "請輸入字串",
            isEmpty: "請輸入值再進行驗證"
        }
    }

    empty(input) {
        if (typeof input === "undefined" || input === "") {
            this.response.message = this.messageContext.isEmpty
            this.response.status = 511
            return true;
        } else {
            return false;
        }
    }

    userName(userName) {
        if (this.empty(userName)) {
            return this.response
        }

        if (typeof userName !== 'string') {
            // throw new TypeError('Expected a string');
            this.response.message = this.messageContext.isString
            this.response.status = 510
            return this.response
        }

        const rule = new RegExp("^[\u4e00-\u9fa5_a-zA-Z]+$");
        if (!rule.test(userName)) {
            this.response.status = 512
            this.response.message = '您的姓名不該包含數字。'
            return this.response
        }
        return this.response
    }

    mobile(mobile) {
        if (this.empty(mobile)) {
            return this.response
        }

        const rule = new RegExp("^[09]{2}[0-9]{8}$");
        if (!rule.test(mobile)) {
            this.response.status = 512
            this.response.message = '您輸入的手機格式不正確。'
            return this.response
        }
        return this.response
    }

    email(email) {
        if (this.empty(email)) {
            return this.response
        }

        const rule = new RegExp("^[^\s]+@[^\s]+\.[^\s]+$");
        if (!rule.test(email)) {
            this.response.status = 512
            this.response.message = '您輸入Email格式不正確。'
            return this.response
        }
        return this.response
    }

    idcard(idcard) {
        if(this.empty(idcard)) {
            return this.response
        }

        const rule = new RegExp("^[A-Z]{1}[0-9]{9}$");
        if (!rule.test(email)) {
            this.response.status = 512
            this.response.message = '您輸入身分證字號格式不正確。'
            return this.response
        }
        return this.response
    }

}