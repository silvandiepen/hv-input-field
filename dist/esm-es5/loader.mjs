import { a as patchEsm, b as bootstrapLazy } from './core-46079700.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["input-field", [[4, "input-field", { "elementId": [1, "id"], "optional": [4], "required": [4], "value": [1], "name": [1], "label": [1], "placeholder": [1], "description": [1], "dirty": [32], "errorMessage": [32], "error": [32] }]]]], options);
    });
};
export { defineCustomElements };
