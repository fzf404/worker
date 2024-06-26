import { Router, text } from 'itty-router'

const router = Router()

router.get('/', () => text('The URL structure is /package@version/file'))

router.get('/gh', () => text('The URL structure is /gh/repo@version/file'))

router.get('/npm', () => text('The URL structure is /npm/package@version/file'))

router.get('/gh/*', async (request) => {
  const url = new URL(request.url)
  const path = url.pathname.replace('/gh/', '')
  const response = await fetch(`https://cdn.jsdelivr.net/gh/fzf404/${path}`)
  if (response.status === 400) {
    return text('The URL structure is /gh/package@version/file', {
      status: 400,
    })
  }
  return response
})

router.get('/npm/*', async (request) => {
  const url = new URL(request.url)
  const path = url.pathname.replace('/npm/', '')
  const response = await fetch(`https://cdn.jsdelivr.net/npm/${path}`)
  if (response.status === 400) {
    return text('The URL structure is /gh/package@version/file', {
      status: 400,
    })
  }
  return response
})

router.get('/*', async (request) => {
  const url = new URL(request.url)
  const path = url.pathname.replace('/', '')
  return await fetch(`https://www.unpkg.com/${path}`)
})

router.all('*', () => text('Not Found'), {
  status: 404,
})

export default {
  async fetch(request) {
    return router.fetch(request)
  },
}
