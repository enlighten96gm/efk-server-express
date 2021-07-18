import wordsService from './WordsService.js'

class WordsController {

  async create(req, res) {
    try {
      const word = await wordsService.create(req.body)
      res.json(word)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getOne(req, res) {
    try {
      const word = await wordsService.getOne(req.params.id);
      return res.json(word)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async delete(req, res) {
    try {
      const word = await wordsService.delete(req.params.id)
      return res.json(word)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getAll(req, res) {
    try {
      const words = await wordsService.getAll();
      return res.json(words)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }



  async update(req, res) {
    try {
      const updatedWords = await wordsService.update(req.body)
      return res.json(updatedWords);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }



}

export default new WordsController();


