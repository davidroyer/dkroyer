export default function (text) {
  const words = text.split('-')
  return words
    .map((word) => {
      if (word === 'ssr') {
        return word.charAt(0).toUpperCase() + word.substring(1).toUpperCase()
      } else {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      }
    })
    .join(' ')
}
