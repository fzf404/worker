import OpenAI from 'openai'

// Send Message to OpenAI server
export const getAnswer = async (env, message, prompt) => {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    baseURL: env.OPENAI_API_URL,
  })
  // Get OpenAI Answer
  const answer = await openai.chat.completions.create({
    model: env.OEPNAI_API_MODEL,
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: message },
    ],
  })
  return answer.choices[0].message.content
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
