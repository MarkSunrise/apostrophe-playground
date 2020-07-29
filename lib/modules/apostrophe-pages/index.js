// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'about',
      label: 'About'
    },
    {
      name: 'faq',
      label: 'FAQ'
    },
    {
      name: 'connector',
      label: 'Connector'
    },
    {
      name: 'connections',
      label: 'Connections'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ]
};
