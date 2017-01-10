class Util {
  static randomIndexArray (total = 5, length = 30) {
    let indexArray = []
    while (indexArray.length < total) {
      let randomNumber = Math.floor(Math.random() * length)
      if (indexArray.indexOf(randomNumber) > -1) {
        continue
      }
      indexArray[indexArray.length] = randomNumber
    }
    return indexArray
  }
}

export default Util
