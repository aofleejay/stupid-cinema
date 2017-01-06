import Util from './Util'
import Seat from './Seat'

class Cinema {
  constructor() {
    this.seats = []
    this.maxSeat = 30
    this.priceList = [100, 120, 140]
    this.reserveIndexList = Util.randomIndexArray()

    this.getSeats()
    this.renderSeats()
  }

  getSeats() {
    for (let i = 0; i < this.maxSeat; i++) {
      let avaliable = true,
          price = this.priceList[parseInt(i/10)]
      if (this.reserveIndexList.indexOf(i) != -1) avaliable = false
      this.seats.push(new Seat(avaliable, price))
    }
  }

  renderSeats() {
    for (let i = 0; i < this.seats.length; i++) {
      if (i % 10 === 0) $('#seats').append('<br>')
      $('#seats').append(`<button class="btn seat ${this.seats[i].avaliable ? 'btn-success' : 'btn-disable disabled'}" data-price="${this.seats[i].price}">${this.seats[i].price}</button>`)
    }
  }
}

export default Cinema