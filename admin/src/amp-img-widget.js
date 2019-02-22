function init() {
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
fields: [{label: "Image", name: "webp_image", widget: "string"}],
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
  return ('<figure class="figure-amp-img">'+
    '<amp-img width="1200px" height="859px" src="' + obj.webp_image +'" sizes="(min-width: 1200px) 720px, 90vw" layout="responsive"></amp-img><figcaption class="image-responsive-caption">Art is a joke, 70x50 cm, acrylic color on canvas with AR, 2018.</figcaption></figure>');
},
// Preview output for this component. Can either be a string or a React component
// (component gives better render performance)
toPreview: function(obj) {
  return (
    '<img width="1200px" height="859px" src="' + obj.webp_image +'" sizes="(min-width: 1200px) 720px, 90vw"></img><figcaption class="image-responsive-caption">'
  );
}
});
};

export { init };
