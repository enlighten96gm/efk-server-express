import Category from "./Category.js";

class CategoriesService {

  async create(category) {
    const createdCategory = await Category.create({ ...category });
    return createdCategory
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id не найден')
    }
    const category = await Category.findById(id);
    return category
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('id не найден')
      }
      const category = await Category.findByIdAndDelete(id)
      return category
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAll() {
    try {
      const categories = await Category.find();
      return categories
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(category) {
    if (!word._id) {
      throw new Error('id не найден')
    }
    const updatedCategory = await Category.findByIdAndUpdate(category._id, category, { new: true })
    return updatedCategory;
  }




}

export default new CategoriesService();