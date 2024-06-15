import { router } from './router'

export default {
  async fetch(request, env) {
    return router.fetch(request, env)
  },
}
