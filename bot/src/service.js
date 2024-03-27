import { getAnswer, sendMessage } from './api'
import { user } from './config'

export const handleWebhook = async (request, env) => {
  // Parse Request Body
  const body = await request.json()
  // Debug
  console.log(body)
  // New Message
  if ('message' in body) {
    await handleMessage(body.message, env)
  }
}

export const handleMessage = async (message, env) => {
  // Message Data
  const { chat, text, sticker, message_id } = message
  // Private Chat
  if (chat.type === 'private') {
    const msg = text ?? (sticker ? sticker.emoji : '向你发送了一张图片')
    // Get OpenAI Answer
    const answer = await getAnswer(env, msg, user['XiaoMouz'][1].prompt)
    // Reply Private Message
    await sendMessage(env, chat.id, answer, message_id)
  }
}
