import { Router } from 'itty-router'

const router = Router()

router.get(
  '/',
  () =>
    new Response(
      JSON.stringify({
        chat: 'https://api.fzf404.art/chat',
        music: 'https://music.fzf404.art/music',
      }),
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      },
    ),
)

router.post('/chat/*', async (request) => {
  const url = new URL(request.url)
  url.hostname = 'api.openai.com'
  url.pathname = url.pathname.replace('/chat', '')
  return await fetch(new Request(url, request))
})

router.get('/music/*', async (request) => {
  const url = new URL(request.url)
  url.hostname = 'music.fzf404.vercel.app'
  url.pathname = url.pathname.replace('/music', '')
  return await fetch(new Request(url, request))
})

router.all('*', () => new Response('Not Found', { status: 404 }))

export default {
  async fetch(request) {
    return router.handle(request)
  },
}
