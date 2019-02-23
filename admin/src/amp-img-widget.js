/*
var CategoriesControl = createClass({
handleChange: function(e) {
this.props.onChange(e.target.value.split(',').map((e) => e.trim()));
},

render: function() {
var value = this.props.value;
return h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange });
}
});

var CategoriesPreview = createClass({
render: function() {
  return h('ul', {},
    this.props.value.map(function(val, index) {
      return h('li', {key: index}, val);
    })
  );
}
});

CMS.registerWidget('categories', CategoriesControl, CategoriesPreview);

CMS.registerEditorComponent({
// Internal id of the component
id: "amp-img",
// Visible label
label: "Amp-img",
// Fields the user need to fill out when adding an instance of the component
fields: [
      {label: "Image_id", name: "id", widget: "string"},
      {label: "Image_name", name: "fileName", widget: "string"}
    ],
// Pattern to identify a block as being an instance of this component
pattern: /^amp-img (\S+)$/,
// Function to extract data elements from the regexp match
fromBlock: function(match) {
  return {
    id: match[1]
  };
},
// Function to create a text block from an instance of this component
toBlock: function(obj) {
  return ( 'amp-img ' + obj.id );
},
// Preview output for this component. Can either be a string or a React component
// (component gives better render performance)
toPreview: function(obj) {
  return (
    '<img width="1200px" height="859px" src="https://ucarecdn.com/' + obj.id +'/' + obj.fileName '"/>');
}
});
*/
CMS.registerEditorComponent({
  // Internal id of the component
  id: "figure",
  // Visible label
  label: "Figure",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {name: 'src', label: 'Image', widget: 'string'},
    {name: 'link', label: 'Link', widget: 'string'},
    {name: 'target', label: 'Target window', widget: 'string'},
    {name: 'rel', label: 'Rel (optional if link set)', widget: 'string'},
    {name: 'alt', label: 'Image alternate text', widget: 'string'},
    {name: 'title', label: 'Figure title', widget: 'string'},
    {name: 'caption', label: 'Figure caption', widget: 'string'},
    {name: 'className', label: 'HTML class', widget: 'string'},
    {name: 'height', label: 'Image height', widget: 'number', min: 1},
    {name: 'width', label: 'Image width', widget: 'string', min: 1},
    {name: 'attr', label: 'Figure attribution text', widget: 'string'},
    {name: 'attrlink', label: 'Figure attribution link', widget: 'string'}
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^{{ figure.html (.*?) }}$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(matchIn) {
    var match = matchIn[1].match(/(?:(\b\w+\b)\s*=\s*("[^"]*"|'[^']*'|[^"'<>\s]+)\s*)/g);
    let results = {};
    for (i=0; i < match.length; i++) {
      const pair = match[i].match(/(\b\w+\b)\s*=\s*("[^"]*"|'[^']*'|[^"'<>\s]+)\s*/);
      results[pair[1]] = pair[2].replace(/['"]+/g,'');
    }
    return results;
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    let results = '{{< figure ';
    Object.keys(obj).forEach((e) => {
      results += `${e}="${obj[e]}" `;
    });
    results += '>}}';
    return results;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      `
      <figure>
        <h3>${obj.title || ''}</h3>
        <a href="${obj.link || ''}" rel="${obj.rel || ''}" target="${obj.target || ''}">
        <img src="${obj.src}" alt="${obj.alt || ''}" width="${obj.width}" height="${obj.height}" /></img>
        </a>
        <figcaption>
          <h4 class="${obj.className}">${obj.caption || ''}</h4>
        </figcaption>
        <small><a href="${obj.attrlink || ''}">${obj.attr || ''}</a></small>
      </figure>
      `
    );
  }
});
