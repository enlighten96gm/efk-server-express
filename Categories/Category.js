import mongoose from 'mongoose'

const Category = new mongoose.Schema({
  _id: { type: String, required: true },
  categoryName: { type: String, required: true },
  categoryData: { type: Object, required: true },
})

export default mongoose.model('Category', Category)