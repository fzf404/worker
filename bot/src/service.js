import { getAnswer, sendMessage, sendSticker } from './api'
import { config, keyword } from './config'
import { containKeyword, replaceKeyword } from './utils'

export const handleWebhook = async (request, env) => {
  // Parse Request Body
  const body = await request.json()
  // Debug
  console.log(body)
  // Handle New Message
  if ('message' in body) {
    return await handleMessage(body.message, env)
  }
}

export const handleMessage = async (message, env) => {
  const { chat, text, reply_to_message } = message
  // Handle Message From
  if (
    chat.type === 'private' ||
    (reply_to_message && reply_to_message.from.username === config.username) ||
    (text && containKeyword(text, config.keywords))
  ) {
    return await sendReply(message, env)
  }
}

export const sendReply = async (message, env) => {
  // Parse Message Data
  let { chat, text, sticker, photo, voice, document, location, message_id } =
    message
  // Handle Text Message
  if (text) {
    // Handle Sticker Keywords
    for (const { keywords, sticker } of config.reply) {
      if (containKeyword(text, keywords)) {
        return await sendSticker(env, chat.id, sticker, message_id)
      }
    }
    // Replace Forbidden Words
    text = replaceKeyword(text, keyword)
  } else if (sticker) {
    text = sticker.emoji
  } else if (photo) {
    text = '向你发送了一张图片'
  } else if (voice) {
    text = '向你发送了一段音频'
  } else if (document) {
    text = '向你发送了一份文件'
  } else if (location) {
    text = '向你发送了一个位置'
  } else {
    text = '向你发送了一条消息'
  }
  // Get History Message
  const history = JSON.parse(await env.bot.get(chat.id)) ?? []
  // Push New Message
  history.push({ role: 'user', content: text })
  // Get OpenAI Answer
  const answer = await getAnswer(env, history, config.prompt)
  // Save Message
  await env.bot.put(
    chat.id,
    JSON.stringify([
      { role: 'user', content: text },
      { role: 'assistant', content: answer },
    ]),
  )
  // Reply Message
  return await sendMessage(env, chat.id, answer, message_id)
}
