//  https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD

(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/inside-airbnb.json', 'utf-8')
  const data = JSON.parse(file)

  const response = await fetch('https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD')
  const properties = await response.json()

  

  const propertiesData = data.map(element => {
    return {
      license: element.license,
      owner: element.host_location,
      town: element.neighbourhood_cleansed,
      latitude: element.latitude,
      longitude: element.longitude
    }
  })

})()
