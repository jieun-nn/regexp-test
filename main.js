let str = `
010-1234-5678
hurshey12@naver.com
https://www.naver.com
The quick brown fox jumps over the lazy dog.
abbccccddddd
http://localhost:55316
`

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(/the/gi))

// console.log(
//   str.match(/^T/gm))

// console.log(
// str.match(/fox|dog/))

// console.log(
// str.match(/https?/g))

// console.log(
// str.match(/\b\w{2,3}\b/g))

// console.log(
// str.match(/[0-9]{1,}/g))

// const h = `   the hello world    !`
// console.log(
//   h.replace(/\s/g, ''))

console.log(
  str.match(/(?<=@).{1,}/g)
)
