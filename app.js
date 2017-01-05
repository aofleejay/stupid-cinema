class Seat {
  constructor(avaliable = true, price = 100) {
    this.avaliable = avaliable;
    this.price = price;
  }
}

let seats = []
const redeemCode = 'HAPPYNEWYEAR2017'
const redeemCodeDiscount = 50

let randomIndexArray = (total = 5, length = 30) => {
  let randomList = []
  while(randomList.length < total){
      let randomNumber = Math.floor(Math.random() * length)
      if (randomList.indexOf(randomNumber) > -1) continue
      randomList[randomList.length] = randomNumber
  }
  return randomList
}

let getSeats = () => {
  const maxSeat = 30,
        priceList = [100, 120, 140]
        reserveIndexList = randomIndexArray()

  for (let i = 0; i < maxSeat; i++) {
    let avaliable = true,
        price = priceList[parseInt(i/10)]
    if (reserveIndexList.indexOf(i) != -1) avaliable = false
    seats.push(new Seat(avaliable, price))
  }
}

let renderSeats = () => {
  for (let i = 0; i < seats.length; i++) {
    if (i % 10 === 0) $('#select').append('<br>')
    $('#select').append(`<button class="btn seat ${seats[i].avaliable ? 'btn-success' : 'btn-disable disabled'}" data-price="${seats[i].price}">${seats[i].price}</button>`)
  }
}

let getTotalPrice = (discount = 100) => {
  let totalPrice = 0
  $('.btn-danger').each(function() {
    totalPrice += parseInt($(this).data('price'), 10)
    
  })
  return totalPrice * discount / 100
}

let getTotalBooked = () => $('.btn-danger').length

let renderSummary = (discount = 100) => {
  let totalPrice = getTotalPrice(discount)
      totalBooked = getTotalBooked()
  $('#price').html(`${totalBooked} Seats : ${totalPrice} Baht`)
}

let checkout = () => {
  let totalPrice = getTotalPrice()
      totalBooked = getTotalBooked()

  $('.btn-danger').each(function() {
    $(this).removeClass('btn-danger').addClass('disabled btn-disable')
  })
  
  alert(`${totalBooked} Seats : ${totalPrice} Baht`)
}

let verifyRedeemCode = (inputRedeemCode) => (inputRedeemCode === redeemCode)

$(document).ready(function () {
  getSeats()
  renderSeats()

  $('#select .seat').on('click', function() {
    selected = $(this).hasClass('btn-disable')
    if (!selected) {
      $(this).toggleClass('btn-success btn-danger')
      renderSummary()
    }
  })

  $('#redeem').on('submit', function(e) {
    e.preventDefault()
    let redeemCode = $('#redeemCode').val()
    verifyRedeemCode(redeemCode) ? renderSummary(redeemCodeDiscount) : alert('Invalid Redeem Code')
  })

  $('#checkout').on('click', function(e) {
    checkout()
  })
})
