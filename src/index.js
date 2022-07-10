import express from "express"
import {RequestContext} from './RequestContext.js'
import {HelloController} from './HelloController.js'

const app = express()
const controller = new HelloController()


app
  .use(RequestContext.create)
  .get("/", controller.get.bind(controller))


app.listen(3000, () => {
  console.log('Listen port http://localhost:3000')
})
