import { router } from './router'

export default {
  async fetch(request, env) {
    return router.handle(request, env)
  },
}
