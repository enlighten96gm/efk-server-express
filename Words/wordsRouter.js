import Router from 'express'
import wordsController from './WordsController.js'

const wordsRouter = new Router()



wordsRouter.post(`/words/`, wordsController.create)
wordsRouter.get('/words/:id', wordsController.getOne)
wordsRouter.delete('/words/:id', wordsController.delete)

export default wordsRouter




