import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

class OneOnOneRepo {
  listarOneOnOne() {
    return axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'1-1'!A2:C?key=AIzaSyAwwlgH1jqu9GuM1KWBKDdQSoLgqALqlPM`
      )
      .then(response => {
        const oneOnOne = _.chain(response.data.values)
          .map(this.parseOneOnOne)
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
      Liderado: array[2]
    };
  }
}

export default new OneOnOneRepo();
