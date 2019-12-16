import { h } from "@stencil/core";
export class InputField {
    constructor() {
        this.optional = false;
        this.required = !this.optional;
        this.placeholder = " ";
    }
    handleBlur(event) {
        this.dirty = true;
        this.error = false;
        this.value = event.target.value;
        if (this.value.length < 1 && this.required) {
            this.error = true;
            this.errorMessage = "You need to fill in atleast something...";
        }
    }
    handleChange(event) {
        event.preventDefault();
    }
    render() {
        return (h("div", { class: "input-field" },
            this.description ? (h("div", { class: "input-field__description" }, this.description)) : (h("div", null)),
            " ",
            this.errorMessage && this.error ? (h("div", { class: "input-field__error" }, this.errorMessage)) : (h("div", null)),
            h("slot", { name: "after" }),
            h("input", { onBlur: event => this.handleBlur(event), onInput: event => this.handleChange(event), class: "input-field__input", value: this.value, id: this.elementId, name: this.name, placeholder: this.placeholder, required: this.required }),
            h("label", { class: "input-field__label" },
                h("span", { class: "input-field__text" },
                    this.label,
                    this.optional ? (h("span", { class: "input-field__optional" }, "(optional)")) : (``))),
            h("slot", { name: "before" })));
    }
    static get is() { return "input-field"; }
    static get originalStyleUrls() { return {
        "$": ["input-field.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["input-field.css"]
    }; }
    static get properties() { return {
        "elementId": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "id",
            "reflect": false
        },
        "optional": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "optional",
            "reflect": false,
            "defaultValue": "false"
        },
        "required": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "required",
            "reflect": false,
            "defaultValue": "!this.optional"
        },
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false
        },
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "\" \""
        },
        "description": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "description",
            "reflect": false
        }
    }; }
    static get states() { return {
        "dirty": {},
        "errorMessage": {},
        "error": {}
    }; }
}