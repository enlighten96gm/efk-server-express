import UserService from './UserService.js'

class UserCotroller {

  async create(req, res) {
    try {
      const user = await UserService.create(req.body)
      res.json(user)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id);
      return res.json(user)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async delete(req, res) {
    try {
      const user = await UserService.delete(req.params.id)
      return res.json(user)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await UserService.getAll();
      return res.json(posts)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }



  // async update(req, res) {
  //   try {
  //     const updatedPost = await PostService.update(req.body)
  //     return res.json(updatedPost);
  //   } catch (error) {
  //     res.status(500).json(error.message)
  //   }
  // }



}

export default new UserCotroller();


