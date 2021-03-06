var path = require('path');

var apos = require('apostrophe')({
  shortName: 'mark-test-cms',
  nestedModuleSubdirs: true,

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.
  bundles: [ 'apostrophe-blog' ],
  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'marks-theme': {},
    'apostrophe-seo': {},
    'apostrophe-open-graph': {},
    'apostrophe-blog': {
      widget: true,
      contextual: true
    },
    'apostrophe-blog-pages': {
      next: true,
      previous: true
    },
    'apostrophe-blog-widgets': {},
    //this creates the dynamic pages from the slug
    'connections': {
      extend: 'apostrophe-custom-pages',
    },
    'apostrophe-pages': {
      // We must list `apostrophe-blog-page` as one of the available page types
      types: [
        {
          name: 'apostrophe-blog-page',
          label: 'Blog'
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
      ]
    },
    'one-column-widgets': {},
    'two-column-widgets': {},
    'three-column-widgets': {},
  }
});
