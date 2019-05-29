import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

class EventoRepo {
  listarEvento() {
    return axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Eventos'!A2:F?key=AIzaSyAwwlgH1jqu9GuM1KWBKDdQSoLgqALqlPM`
      )
      .then(response => {
        const eventos = _.chain(response.data.values)
          .map(this.parseEvento)
          .value();
        return eventos;
      })
      .catch(error => {
        console.log(error);
      });
  }

  parseEvento(array) {
    return {
      Imagem: `https://docs.google.com/uc?id=${array[0].split('d/')[1].split('/')[0]}`,
      Responsavel: array[1],
      Descricao: array[2],
      Data: moment(array[3], 'DD/MM/YYYY')
    };
  }
}

export default new EventoRepo();
