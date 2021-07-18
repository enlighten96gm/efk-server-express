import SetService from "./set-service.js";

class SetController {

    async createSet(req, res) {
        try {
            const set = await SetService.create(req.body, req.files)
            res.json(set)
          } catch (error) {
            res.status(500).json(error.message)
          }
    }
    async getOne(req, res) {
      console.log(req.params.idSet);
      try {
        const user = await SetService.getOne(req.params.idSet);
        return res.json(user)
      } catch (error) {
        res.status(500).json(error.message)
      }
    }
  async update(req, res) {
    try {
      const updatedSet = await SetService.update(req.body)
      return res.json(updatedSet);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  async getAll(req, res) {
    try {
      const sets = await SetService.getAll(req.params.id);
      return res.json(sets)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  async delete(req, res) {
    try {
      const category = await SetService.delete(req.params.idSet)
      return res.json(category)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}



export default new SetController();