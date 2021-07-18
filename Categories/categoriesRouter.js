import Router from 'express'
import categoriesController from './CategoriesController.js'

const categoriesRouter = new Router()

categoriesRouter.post('/categories/', categoriesController.create)
categoriesRouter.get('/categories/:id', categoriesController.getOne)
categoriesRouter.delete('/categories/:id', categoriesController.delete)

export default categoriesRouter




