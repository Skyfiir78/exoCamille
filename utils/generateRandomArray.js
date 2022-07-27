const generateRandomArray = () => {
  let arr = []
  for (var i = 0; i < 10000000; i++) {
    arr[i] = Math.trunc(Math.random() * 1000)
  }
  return arr
}

module.exports = generateRandomArray
