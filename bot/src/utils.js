export const containKeyword = (message, keyword) => {
  return keyword.some((word) => message.includes(word))
}
