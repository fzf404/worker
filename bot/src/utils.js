export const containKeyword = (message, keyword) => {
  return keyword.some((word) => message.includes(word))
}

export const replaceKeyword = (message, keyword) => {
  const regex = new RegExp(Object.keys(keyword).join('|'), 'g')
  return message.replace(regex, (match) => keyword[match])
}
