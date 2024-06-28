import { api } from "src/boot/axios";
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
      console.error(error)
    })
  }
}