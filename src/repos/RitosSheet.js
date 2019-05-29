import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

class RitoskSheet {
  async listarRitos(tribo) {
    return axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Ritos%20Aux'!A1:F?key=AIzaSyAwwlgH1jqu9GuM1KWBKDdQSoLgqALqlPM`
      )
      .then(response => {
        const ritos = _.chain(response.data.values)
          .filter(squad => {
            return squad[1] && squad[1].includes(tribo);
          })
          .map(this.parseSquad)
          .value();
        return ritos;
      })
      .catch(error => {
        console.log(error);
      });
  }

  parseSquad(array) {
    return {
      Squad: array[1],
      Cliente: array[2],
      CheckArquitetural: moment(array[3], 'DD/MM/YYYY'),
      CheckExecucao: moment(array[4], 'DD/MM/YYYY'),
      Retro: moment(array[5], 'DD/MM/YYYY'),
      Andon: array[0]
    };
  }
}

export default new RitoskSheet();
