import {AsyncLocalStorage} from 'async_hooks'

const storage = new AsyncLocalStorage()

export class RequestContext extends Map {
  static #counter = 1

  constructor (req, res) {
    super()
    this.id = RequestContext.#counter++
    this.req = req
    this.res = res
  }

  static create (req, res, next) {
    const ctx = new RequestContext(req, res)

    return storage.run(ctx, next);
  }

  /**
   * Returns current RequestContext (if available).
   */
  static currentRequestContext() {
    return storage.getStore();
  }
}
