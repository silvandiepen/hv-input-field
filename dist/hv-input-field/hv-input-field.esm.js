import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-4033defc.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["input-field",[[4,"input-field",{"elementId":[1,"id"],"optional":[4],"required":[4],"value":[513],"name":[1],"label":[1],"placeholder":[1],"description":[1],"dirty":[32],"errorMessage":[32],"error":[32]}]]]], options);
});
