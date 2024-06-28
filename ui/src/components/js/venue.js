import { api } from "src/boot/axios";
import { Notify } from "quasar";
export class Venue {
  constructor() {
    /** @type {Array<Object>} */
    this.venues = []
  }

  getVenue(city, success) {
    api.get('/venue/' + city).then(response => {
      this.venues = response.data.results
      success ? success(response.data) : false
    }).catch(error => {
      Notify.create({
        message: 'There is error encounter while fetching the api.',
        color: 'red-8',
        position: "bottom-right"
      })
      console.error(error)
    })
  }
}