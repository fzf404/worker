import OpenAI from 'openai'

export const sendMessage = async (env, chatId, message, replyId) => {
  const url = `${env.TELEGRAM_API_URL}/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`
  const params = {
    text: message,
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

export const getAnswer = async (env, message, prompt) => {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    baseURL: env.OPENAI_API_URL,
  })

  const answer = await openai.chat.completions.create({
    prompt: prompt,
    model: env.OEPNAI_API_MODEL,
    messages: [{ role: 'user', content: message }],
  })

  return answer.choices[0].message
}
