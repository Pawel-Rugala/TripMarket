import fs from 'fs'
import path from 'path'

export const getDummyDataFromFile = () => {
 return new Promise((resolve, reject) => {
  const filePath = path.join(__dirname, '../dummy/tours.json')
  fs.readFile(filePath, (err, data) => {
   if (err) {
    reject(err)
   }
   resolve(JSON.parse(data.toString()))
  })
 })
}
