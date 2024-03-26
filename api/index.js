import { error, json, Router } from 'itty-router'

const router = Router()

router.get('/', () =>
  json({
    chat: 'https://api.fzf404.art/chat',
    music: 'https://api.fzf404.art/music',
  }),
)

router.all('/chat/*', (request) => {
  const url = new URL(request.url)
  url.hostname = 'api.openai.com'
  url.pathname = url.pathname.replace('/chat', '')
  return fetch(new Request(url, request))
})

router.all('/music/*', (request) => {
  const url = new URL(request.url)
  url.hostname = 'music.fzf404.vercel.app'
  url.pathname = url.pathname.replace('/music', '')
  return fetch(new Request(url, request))
})

router.all('*', () => error(404))

export default {
  async fetch(request) {
    return router.handle(request)
  },
}
