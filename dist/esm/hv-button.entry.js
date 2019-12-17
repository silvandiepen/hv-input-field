import { r as registerInstance, h, g as getElement } from './core-bad33e13.js';

const InputField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("button", { class: "hv-button" }, h("span", { class: "hv-button__text" }, this.label), this.icon ? (h("span", { class: "hv-button__icon" }, this.icon)) : (h("span", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ".hv-button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border:1px solid #000}.hv-button__text{display:block;padding:.75rem 1.5rem}"; }
};

export { InputField as hv_button };
