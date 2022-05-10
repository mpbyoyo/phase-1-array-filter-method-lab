// Code your solution here
const findMatching = (arr, str) => {
  return arr.filter(elem => elem.toLowerCase() == str.toLowerCase())
}

const fuzzyMatch = (arr, str) => {
  return arr.filter(elem => {
    for(let i = 0; i < str.length; i++) {
      if (elem[i] != str[i]) return false
    }
    return true
  })
}

const matchName = (arr, str) => {
  return arr.filter(obj => obj.name == str)
}