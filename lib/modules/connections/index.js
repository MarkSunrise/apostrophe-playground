module.exports = {
    extend: 'apostrophe-custom-pages',

    name: 'connections',

    construct: function(self, options) {
      self.dispatch('/:id', (req, callback) => {
        console.log(req.params);
        callback(null);
      });
    }
  };
