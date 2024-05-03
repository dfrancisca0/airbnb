//  foreign owners by country

(async () => {

  const fs = require('fs/promises')
  
  const file = await fs.readFile('../data/airbnb-owner-ranking-last-year.json', 'utf-8')
  const data = JSON.parse(file)
    
  const spainOwners = data.filter(item => item.hostLocation && item.hostLocation.includes('Spain'))
  const foreignOwners = data.filter(item => item.hostLocation && !item.hostLocation.includes('Spain'))

  const foreignEntities = foreignOwners.reduce((acc, owner) => {

    const location = owner.hostLocation ? owner.hostLocation.toLowerCase() : 'unknown'
    const country = location.split(', ')[1]

    if(!acc[country]) {
      acc[country] = [owner]
    } else {
      acc[country] = [...acc[country], owner]
    }
    return acc
  }, {})

  console.log(foreignEntities)
  
})()