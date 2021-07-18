import mongoose from 'mongoose'
import AuthData from '../AuthData.js'

// const sWord = new mongoose.Schema({
//   _id: { type: String, required: true },
//   WordData: { type: Object, required: true },
// })

// export default mongoose.model(`Word`, sWord)


export const WordModelCreator = () => {
  const sWord = new mongoose.Schema({
    _id: { type: String, required: true },
    WordData: { type: Object, required: true },
  })
  const Word = mongoose.model(`${AuthData.id}-words`, sWord)
  return Word
}