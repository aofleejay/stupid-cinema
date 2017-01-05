$(document).ready(function () {
  let cinema = new Cinema
  let price  = new Price
  let discount  = new Discount

  $('#seats .seat').on('click', function() {
    disabledSelector = $(this).hasClass('btn-disable')
    if (!disabledSelector) {
      $(this).toggleClass('btn-success btn-danger')
      price.calculateTotalPrice()
      price.calculateTotalBooked()
      price.renderSummary()
    }
  })

  $('#redeem').on('submit', function(e) {
    e.preventDefault()
    const discountPrice = 50
    let redeemCode = $('#redeemCode').val()
    discount.verifyCode(redeemCode) ? price.setDiscount(discountPrice) : alert('Invalid Redeem Code')
  })

  $('#checkout').on('click', function(e) {
    price.checkout()
  })
})
