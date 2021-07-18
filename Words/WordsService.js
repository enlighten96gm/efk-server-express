// import Word from "./Word.js";

import { WordModelCreator } from './Word.js';

class WordsService {

  async create(words) {
    const Word = WordModelCreator()
    const createdWord = await Word.create({ ...words });
    return createdWord
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id не найден')
    }
    const word = await Word.findById(id);
    return word
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('id не найден')
      }
      const word = await Word.findByIdAndDelete(id)
      return word
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAll() {
    try {
      const words = await Word.find();
      return words
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(word) {
    if (!word._id) {
      throw new Error('id не найден')
    }
    const updatedWord = await Word.findByIdAndUpdate(word._id, word, { new: true })
    return updatedWord;
  }

}


export default new WordsService();