import { Router } from 'itty-router'

const router = Router()

router.get('/favicon.ico', () => new Response('Not Found', { status: 404 }))

router.get(
  '/',
  () => new Response('The URL structure is /package@version/file'),
)

router.get(
  '/gh',
  () => new Response('The URL structure is /gh/package@version/file'),
)

router.get(
  '/npm',
  () => new Response('The URL structure is /npm/package@version/file'),
)

router.get('/gh/*', async (request) => {
  const url = new URL(request.url)
  const path = url.pathname.replace('/gh/', '')
  const response = await fetch(`https://cdn.jsdelivr.net/gh/fzf404/${path}`)
  if (response.status === 400) {
    return new Response('The URL structure is /gh/package@version/file')
  }
  return response
})

router.get('/npm/*', async (request) => {
  const url = new URL(request.url)
  const path = url.pathname.replace('/npm/', '')
  const response = await fetch(`https://cdn.jsdelivr.net/npm/${path}`)
  if (response.status === 400) {
    return new Response('The URL structure is /npm/package@version/file')
  }
  return response
})

router.get('/*', async (request) => {
  const url = new URL(request.url)
  const path = url.pathname.replace('/', '')
  return await fetch(`https://www.unpkg.com/${path}`)
})

router.all('*', () => new Response('Not Found', { status: 404 }))

export default {
  async fetch(request) {
    return router.handle(request)
  },
}
