class Discount {
  constructor () {
    this.redeemCode = 'HAPPYNEWYEAR2017'
  }

  verifyCode (inputCode) {
    return this.redeemCode === inputCode
  }
}

export default Discount
