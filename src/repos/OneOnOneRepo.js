import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

class OneOnOneRepo {
  listarOneOnOne(cliente) {
    return axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'1-1'!A2:E?key=AIzaSyBGIJGZ64VWP-O9KQPcmr6YaVeZh_O0KLw`
      )
      .then(response => {
        const oneOnOne = _.chain(response.data.values)
          .map(this.parseOneOnOne)
          .filter(oneOnOne => {
            return oneOnOne.Cliente === cliente;
          })
          .value();
        return oneOnOne;
      })
      .catch(error => {
        console.log(error);
      });
  }

  parseOneOnOne(array) {
    return {
      Crafter: array[0],
      Data: moment(array[1], 'DD/MM/YYYY'),
      Lider: array[2],
      Cliente: array[3],
      OKR: array[4] === 'TRUE'
    };
  }
}

export default new OneOnOneRepo();
