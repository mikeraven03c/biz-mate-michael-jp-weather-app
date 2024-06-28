import { api } from "src/boot/axios";
export class Forecast {
  constructor() {
    /** @type object */
    this.dailyList = {}
    /** @type object */
    this.placeDailyList = {}
  }

  /**
   * @param {string} city
   * @param {function} success
  */
  getForecast(city, success) {
    api.get('/forecast/' + city).then(response => {
      const list = response.data.list
      this.dailyList = groupForecastByDt(list)

      success ? success(response.data) : false
    }).catch(error => {
      console.error(error)
    })
  }

  /**
   * @param {string} city
   * @param {string} fsqid
   * @param {string} lat
   * @param {string} lon
   * @param {function} success
  */
  getPlaceForecast(
    city,
    fsqid,
    lat,
    lon,
    success
  ) {
    api.get(`/forecast/${city}/${fsqid}/${lat}/${lon}`).then(response => {
      const list = response.data.list
      this.placeDailyList = groupForecastByDt(list)

      success ? success(response.data) : false
    }).catch(error => {
      console.error(error)
    })
  }
}

/**
 * @param {Array<object>} list
*/
export function groupForecastByDt(list) {
  return list.reduce((acc, forecast) => {
    const datetime = forecast.dt_txt.split(' ')
    const date = datetime[0]
    const time = datetime[1]

    if (!acc[date]) {
      acc[date] = [];
    }

    forecast.time = time.slice(0, -3);
    forecast.celcius = (Number(forecast.main.temp) - 273.15).toFixed(2)
    forecast.date = date

    acc[date].push(forecast);

    return acc;
  }, {});
}

/**
 *
 * @deprecated
 */
export function convertUnixToLocaleDate(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
  return date.toISOString();
}

/**
 *
 * @deprecated
 */
function formatDateTime(unixTime) {
  const date = new Date(unixTime * 1000);
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleString('en-US', options);
}

/**
 *
 * @deprecated
 */
export function groupForecastByDay(data) {
  return data.reduce((acc, current) => {
    // Convert Unix UTC time to a date object
    const date = new Date(current.dt * 1000);
    // Get the date part as a string (YYYY-MM-DD)
    const dateString = date.toISOString().split('T')[0];
    // If the date string is not already a key in the accumulator, add it
    if (!acc[dateString]) {
      acc[dateString] = [];
    }

    const formattedDateTime = formatDateTime(current.dt);

    // Append the formatted date/time to the current data object
    current.formattedDateTime = formattedDateTime;

    // Push the current data object to the corresponding date group
    current.locale_date = date.toISOString()
    acc[dateString].push(current);


    return acc;
  }, {});
}
