import { a as patchEsm, b as bootstrapLazy } from './core-bad33e13.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["hv-button",[[0,"hv-button",{"label":[1],"icon":[1]}]]],["input-field",[[4,"input-field",{"elementId":[1,"id"],"optional":[4],"required":[4],"value":[513],"name":[1],"label":[1],"placeholder":[1],"description":[1],"dirty":[32],"errorMessage":[32],"error":[32]}]]]], options);
  });
};

export { defineCustomElements };
