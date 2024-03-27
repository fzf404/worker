export const replaceKeyword = (str, keyword) => {
  const pattern = new RegExp(Object.keys(keyword).join('|'), 'g')
  return str.replace(pattern, (match) => keyword[match])
}
