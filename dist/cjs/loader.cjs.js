'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-d4b82870.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["input-field.cjs",[[4,"input-field",{"elementId":[1,"id"],"optional":[4],"required":[4],"value":[1],"name":[1],"label":[1],"placeholder":[1],"description":[1],"dirty":[32],"errorMessage":[32],"error":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
