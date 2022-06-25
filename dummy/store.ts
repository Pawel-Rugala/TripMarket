import { TDummyArrayData, TDummyData } from '../types'
import { getDummyDataFromFile, writeDummyDataToFile } from '../utils/localFiles'

export class dummyStore {
 state: TDummyArrayData
 constructor() {
  this.state = []
 }
 getState() {
  return this.state
 }
 async setState() {
  try {
   const data = await getDummyDataFromFile()
   this.state = data
  } catch (error) {
   console.log(error)
  }
 }
 async addValue(value: TDummyData) {
  try {
   this.state.push(value)
   await writeDummyDataToFile(this.state)
   await this.setState()
  } catch (error) {
   console.log(error)
  }
 }
 async updateValue(id: number, value: TDummyData) {
  try {
   const index = this.state.findIndex((trip) => trip.id === id)
   this.state[index] = value
   await writeDummyDataToFile(this.state)
   await this.setState()
  } catch (error) {
   console.log(error)
  }
 }
 async deleteTour(id: number) {
  try {
   const index = this.state.findIndex((trip) => trip.id === id)
   this.state.splice(index, 1)
   await writeDummyDataToFile(this.state)
   await this.setState()
  } catch (error) {
   console.log(error)
  }
 }
 getTrip(id: number) {
  return this.state.find((trip) => trip.id === id)
 }
 generateId() {
  const num = this.state[this.state.length - 1].id + 1
  return num
 }
}
