import OpenAI from 'openai'

// Send Message to OpenAI Server
export const getAnswer = async (env, message, prompt) => {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    baseURL: env.OPENAI_API_URL,
  })
  try {
    // Get OpenAI Answer
    const answer = await openai.chat.completions.create({
      model: env.OEPNAI_API_MODEL,
      messages: [{ role: 'system', content: prompt }, ...message],
    })
    // Debug
    console.log(answer.choices)
    return answer.choices[0].message.content
  } catch ({ error }) {
    // Debug
    console.log(error.message)
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

// Send Sticker to Telegram API
export const sendSticker = async (env, chatId, sticker, replyId) => {
  const url = `${env.TELEGRAM_API_URL}/bot${env.TELEGRAM_BOT_TOKEN}/sendSticker`
  const params = {
    sticker: sticker,
    chat_id: chatId,
    reply_parameters: {
      message_id: replyId,
    },
  }
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
}
