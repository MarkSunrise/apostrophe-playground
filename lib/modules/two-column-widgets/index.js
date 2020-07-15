module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Two Column',
  contextualOnly: true,
  // This will configure 2 one-column widgets and will save the data to a mongo schema called 'one' and 'two' respectively.
  // Type area refers to a section of editable content. e.g. 2 one-column widget areas where you can store/edit content
  addFields: [
    {
      name: 'one',
      type: 'area'
    },
    {
      name: 'two',
      type: 'area'
    }
  ]

};

