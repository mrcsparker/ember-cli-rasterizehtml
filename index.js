'use strict';

var path = require('path');

module.exports = {
  name: 'Ember CLI rasterizehtml',

  treeFor: function(name) {
    if (name !== 'vendor') { return; }

    return this.treeGenerator(path.join(__dirname, 'node_modules'));
  },

  included: function(app) {
    this._super.included(app);

    var options = this.app.options.rasterizehtmlOptions || {enabled: true};

    if (options.enabled) {
      this.app.import('vendor/rasterizehtml/dist/rasterizeHTML.allinone.js', {
        exports: {
          'rasterizehtml': [
            'url',
            'xmlserializer',
            'ayepromise',
            'inlineresources'
          ]
        }
      });
    }
  }
};
