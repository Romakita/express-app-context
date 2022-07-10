import {RequestContext} from './RequestContext.js'

export class HelloController {
  get() {
    const ctx = RequestContext.currentRequestContext()

    ctx.res.json({
      id: ctx.id,
      content: 'hello'
    })
  }
}
