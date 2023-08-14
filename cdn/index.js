import { Router } from 'itty-router'

const router = Router()

router.get(
  '/',
  () => new Response('The URL structure is /package@version/file.js'),
)

router.get('/*', async (request) => {
  const url = new URL(request.url)
  const link = `https://www.unpkg.com${url.pathname}`
  return await fetch(link)
})

export default {
  async fetch(request) {
    return router.handle(request)
  },
}
