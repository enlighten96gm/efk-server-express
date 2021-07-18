import Router from 'express'
import GameController from './game/game-controller.js'
import SetController from './sets/set-controller.js'
import UserController from './UserController.js'

const userRouter = new Router()

userRouter.post('/users/', UserController.create)

userRouter.post('/users/:id/sets', SetController.createSet)
userRouter.get('/users/:id/sets/:idSet', SetController.getOne)
userRouter.delete('/users/:id/sets/:idSet', SetController.delete)
userRouter.get('/users/:id/sets/', SetController.getAll)
userRouter.put('/users/:id/sets/:id', SetController.update)

userRouter.post('/users/:id/sets/:id/game', GameController.createCard)
userRouter.get('/users/:userid/sets/:setid/game', GameController.getAll)
userRouter.put('/users/:userid/sets/:setid/game/:gameid', GameController.update)
userRouter.delete('/users/:userid/sets/:setid/game/:idCard', GameController.delete)


userRouter.get('/users/:id', UserController.getOne)
userRouter.get('/users/', UserController.getAll)
userRouter.delete('/users/:id', UserController.delete)

export default userRouter