import { error, Router } from 'itty-router'

import { sendMessage } from './api'

const router = Router()

router.post('/webhook', async (request, env) => {
  const body = await request.json()
  console.log(body)
  if (
    request.headers.get('X-Telegram-Bot-Api-Secret-Token') !==
    env.TELEGRAM_WEBHOOK_KEY
  ) {
    return error(403)
  }
  const { message } = body
  return await sendMessage(
    env,
    message.chat.id,
    message.text,
    message.message_id,
  )
})

router.all('*', () => error(404))

export { router }
