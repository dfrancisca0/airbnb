(async () => {

  const fs = require('fs/promises')

  try {
    
    const file = await fs.readFile('../data/inside-airbnb-filter.json', 'utf-8')
    let data = JSON.parse(file)

    data = data.map(property => {
      if (property.price && typeof property.price === 'string') {
        property.price = property.price.substring(1).replace(',', '')
      }

      return Object.entries(property).reduce((acc, [key, value]) => {
        acc[key] = value === '' ? null : value
        return acc
      }, {})
    })

    let response = await fetch('http://127.0.0.1:8080/api/admin/properties', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })

    response = await response.json()
    
  } catch (error) {
    console.log(error)
  }
})()