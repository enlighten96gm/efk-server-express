import categoriesService from './CategoriesService.js'

class CategoriesController {

  async create(req, res) {
    try {
      const category = await categoriesService.create(req.body)
      res.json(category)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getOne(req, res) {
    try {
      const category = await categoriesService.getOne(req.params.id);
      return res.json(category)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async delete(req, res) {
    try {
      const category = await categoriesService.delete(req.params.id)
      return res.json(category)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getAll(req, res) {
    try {
      const categories = await categoriesService.getAll();
      return res.json(categories)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }



  async update(req, res) {
    try {
      const updatedcategory = await categoriesService.update(req.body)
      return res.json(updatedcategory);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }



}

export default new CategoriesController();


