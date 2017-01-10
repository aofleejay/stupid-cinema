import $ from 'jquery'

class Price {
  constructor () {
    this.totalPrice = 0
    this.totalBooked = 0
    this.discount = 0

    this.renderSummary()
  }

  getTotalPrice () {
    return this.totalPrice
  }

  getTotalBooked () {
    return this.totalBooked
  }

  getDiscount () {
    return this.discount
  }

  setDiscount (discount) {
    this.discount = discount
    this.calculateTotalPrice()
    this.calculateTotalBooked()
    this.renderSummary()
  }

  calculateTotalPrice () {
    let totalPrice = 0
    $('.btn-danger').each(function () {
      totalPrice += parseInt($(this).data('price'), 10)
    })

    this.totalPrice = totalPrice * (100 - this.getDiscount()) / 100
  }

  calculateTotalBooked () {
    this.totalBooked = $('.btn-danger').length
  }

  renderSummary () {
    $('#totalBooked').html(this.getTotalBooked())
    $('#totalPrice').html(this.getTotalPrice())
  }

  checkout () {
    $('.btn-danger').each(function () {
      $(this).removeClass('btn-danger').addClass('disabled btn-disable')
    })
    
    alert(`${this.getTotalBooked()} Seats : ${this.getTotalPrice()} Baht`)
  }
}

export default Price
