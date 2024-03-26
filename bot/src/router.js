import { Router, text } from 'itty-router'

import { handleWebhook } from './service'
const router = Router()

router.post('/webhook', async (request, env) => {
  // Authentication
  if (
    request.headers.get('X-Telegram-Bot-Api-Secret-Token') !==
    env.TELEGRAM_WEBHOOK_KEY
  ) {
    return text('Unauthorized', { status: 403 })
  }
  // Handle Message
  await handleWebhook(request, env)
  // Return Response
  return text('Ok')
})

export { router }
