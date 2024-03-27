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
  const { chat, text, message_id } = message
  // Private Chat
  if (chat.type === 'private') {
    if (text) {
      // Get OpenAI Answer
      const answer = await getAnswer(env, text, user['XiaoMouz'][1].prompt)
      // Reply Private Message
      await sendMessage(env, chat.id, answer, message_id)
    } else {
      await sendMessage(env, chat.id, '别发表情包', message_id)
    }
  }
}
