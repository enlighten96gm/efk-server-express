import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import userRouter from './Users/user-router.js';
import wordsRouter from './Words/wordsRouter.js';
import categoriesRouter from './Categories/categoriesRouter.js';
import postRouter from './Posts/posts-router.js';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'



const port = process.env.PORT || '5000'
const swaggerOptions = {

  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: [`${port}`]
    }
  },
  apis: ["app.js"]
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
const DB_URL = 'mongodb+srv://gleb:gleb@cluster0.lohza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()



const Routers = [postRouter, categoriesRouter, wordsRouter, userRouter]
// console.log(myUrls);

app.use(express.json())
app.use(cors())
app.use(express.static('static'))
app.use(fileUpload({}))

app.use(`/api`, Routers)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Routes
/**

 * @swagger

 * /users/:

 *  post:

 *    description: Create user

 *    responses:

 *      '200':

 *        description: A successful response

 */
/**

 * @swagger

 * /users/:id/sets:

 *  post:

 *    description: Create set

 *    responses:

 *      '200':

 *        description: A successful response

 */
/**

 * @swagger

 * /users/:id/sets/:idSet:

 *  get:

 *    description: Get one set

 *    responses:

 *      '200':

 *        description: A successful response

 */
/**

 * @swagger

 * /users/:id/sets/:idSet:

 *  delete:

 *    description: Delete single set

 *    responses:

 *      '200':

 *        description: A successful response

 */
/**

 * @swagger

 * /users/:id/sets/:

 *  get:

 *    description: Get single user sets

 *    responses:

 *      '200':

 *        description: A successful response

 */
/**

 * @swagger

 * /users/:id/sets/:id:

 *  put:

 *    description: Update single set

 *    responses:

 *      '200':

 *        description: A successful response

 */
/**

 * @swagger

 * /users/:id/sets/:id/game:

 *  post:

 *    description: Post word

 *    responses:

 *      '200':

 *        description: A successful response

 */
/**

 * @swagger

 * /users/:userid/sets/:setid/game:

 *  get:

 *    description: Get all words

 *    responses:

 *      '200':

 *        description: A successful response

 */
/**

 * @swagger

 * /users/:userid/sets/:setid/game/:gameid:

 *  put:

 *    description: Change single word

 *    responses:

 *      '200':

 *        description: A successful response

 */
/**

 * @swagger

 * /users/:userid/sets/:setid/game/:idCard:

 *  delete:

 *    description: Delete single word

 *    responses:

 *      '200':

 *        description: A successful response

 */






async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }).then(console.log('MongoDb connected'))
    app.listen(port, () => {
      console.log('port:', port);
    })

  } catch (error) {
    console.log(error);
  }
}

startApp()



