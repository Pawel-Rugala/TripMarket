import fs from 'fs'
import path from 'path'
import { TDummyArrayData } from '../types'

export const getDummyDataFromFile = () => {
 return new Promise<TDummyArrayData>((resolve, reject) => {
  const filePath = path.join(__dirname, '../dummy/tours.json')
  fs.readFile(filePath, (err, data) => {
   if (err) {
    reject(err)
   }
   resolve(JSON.parse(data.toString()) as TDummyArrayData)
  })
 })
}

export const writeDummyDataToFile = (data: TDummyArrayData) => {
 return new Promise<void>((resolve, reject) => {
  const filePath = path.join(__dirname, '../dummy/tours.json')
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
   if (err) {
    reject(err)
   }
   resolve()
  })
 })
}
