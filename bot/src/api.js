import OpenAI from 'openai'

import { keyword } from './config'
import { replaceKeyword } from './utils'

// Send Message to OpenAI server
export const getAnswer = async (env, message, prompt) => {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    baseURL: env.OPENAI_API_URL,
  })
  // Replace Forbidden Words
  message = replaceKeyword(message, keyword)
  try {
    // Get OpenAI Answer
    const answer = await openai.chat.completions.create({
      model: env.OEPNAI_API_MODEL,
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: message },
      ],
    })
    return answer.choices[0].message.content
  } catch ({ error }) {
    return error.message
  }
}

// Send Message to Telegram API
export const sendMessage = async (env, chatId, message, replyId) => {
  const url = `${env.TELEGRAM_API_URL}/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`
  // Struct Message Parameters
  const params = {
    text: message,
    chat_id: chatId,
    reply_parameters: {
      message_id: replyId,
    },
  }
  // Send Message
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
}
