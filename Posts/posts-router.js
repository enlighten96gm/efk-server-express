import Router from 'express'
import PostController from './PostController.js'

const postRouter = new Router()

// myUrls.forEach((myUrl) => {
//   postRouter.post(myUrl, PostController.create)
//   postRouter.get(myUrl, PostController.getAll)
//   postRouter.get(`${myUrl}:id`, PostController.getOne)
//   postRouter.put(myUrl, PostController.update)
//   postRouter.delete(`${myUrl}:id`, PostController.delete)
// })

postRouter.post('/posts/', PostController.create)
postRouter.get('/posts', PostController.getAll)
postRouter.get('/posts/:id', PostController.getOne)
postRouter.put('/posts', PostController.update)
postRouter.delete('/posts/:id', PostController.delete)

export default postRouter