
const palindrome = (str) => {
  let i = 0
  let j = str.length - 1
  while (i < j) {
    if (str[i] !== str[j]) return `${str} is not palindrome`
    i++
    j--
  }
  return `${str} is palindrome`
}
console.log(palindrome('mama'));