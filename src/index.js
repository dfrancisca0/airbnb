//  https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD

// (async () => {

//   const fs = require('fs/promises')

//   const file = await fs.readFile('../data/airbnb-owner-ranking-last-year.json', 'utf-8')
//   const data = JSON.parse(file)


//   const spainOwners = data.filter(item => item.hostLocation && item.hostLocation.includes('Spain'))
//   const foreignOwners = data.filter(item => item.hostLocation && !item.hostLocation.includes('Spain'))

//   let spainOwnersQty = data.reduce((acc, item) => {
//     if (item.hostLocation && item.hostLocation.includes('Spain')) {
//       return acc + 1
//     }

//     return acc
//   }, 0)
  
//   const spainOwnersPercentage = (spainOwnersQty / data.length) * 100

//   console.log(spainOwnersPercentage)

// })()

(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/inside-airbnb.json', 'utf-8')
  const data = JSON.parse(file)

  const license = data.map(element => {
    return {
      propietario : element.host_location,
      licencia: element.license
    }
  })

  const owners =  license.filter(element => {
    if(element.licencia.split('/')[0] === "VT"){
      return element
    }
  })

  console.log(owners.lenght)
})()
