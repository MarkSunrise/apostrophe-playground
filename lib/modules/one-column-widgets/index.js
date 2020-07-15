// OOP pattern: extending an apostrophe module
module.exports = {
  extend: 'apostrophe-widgets',
  label: 'One Column',
  contextualOnly: true,
  // The data created in the one column widget will be stored in a mongo schema called 'one'.
  // Type area refers to a section of editable content. e.g. one column widget area where you can store/edit content
  addFields: [
    {
      name: 'one',
      type: 'area'
    }
  ]
};

