'use strict';

const core = require('./core-d4b82870.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["input-field.cjs",[[4,"input-field",{"elementId":[1,"id"],"optional":[4],"required":[4],"value":[1],"name":[1],"label":[1],"placeholder":[1],"description":[1],"dirty":[32],"errorMessage":[32],"error":[32]}]]]], options);
});
