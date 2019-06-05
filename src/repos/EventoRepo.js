import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

class EventoRepo {
  listarEvento() {
    return axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Eventos'!A2:F?key=AIzaSyBGIJGZ64VWP-O9KQPcmr6YaVeZh_O0KLw`
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
      Data: moment(array[2], 'DD/MM/YYYY'),
      Descricao: array[3]
    };
  }
}

export default new EventoRepo();
