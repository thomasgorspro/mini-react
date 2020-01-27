function render(template, options) {  
  console.log(options);
  return template.replace(/\{\{\s?([\w.]+)\s?\}\}/g, (match, variable) => {
    return variable.split('.').reduce((previous, current) => {
      return previous[current]
    }, options) || ''
  })
}

const nested_template = `
<li data-id="{{ id }}">
  <p>
    <strong>{{ name.first }} {{ name.last }}</strong>
    <small>{{ type }}</small>
  </p>
</li>
`

const unAnimal = {
  id: '1',
  name: {
    first: 'un prenom',
    last: 'un nom'
  },
  type: 'chat'
}

var insertable_markup = render(nested_template, unAnimal)

console.log(insertable_markup);