'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-13d5d684.js');

const InputField = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("button", { class: "hv-button" }, core.h("span", { class: "hv-button__text" }, this.label), this.icon ? (core.h("span", { class: "hv-button__icon" }, this.icon)) : (core.h("span", null))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ".hv-button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border:1px solid #000}.hv-button__text{display:block;padding:.75rem 1.5rem}"; }
};

exports.hv_button = InputField;
