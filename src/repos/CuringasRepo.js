import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

class CuringasRepo {
  listarCuringas(cliente) {
    return axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Curingas'!A2:G?key=AIzaSyBGIJGZ64VWP-O9KQPcmr6YaVeZh_O0KLw`
      )
      .then(response => {
        return _.chain(response.data.values)
          .map(this.parseCuringa)
          .filter(curinga => {
            return !cliente || (cliente && curinga.Cliente === cliente);
          })
          .value();
      })
      .catch(error => {
        console.log(error);
      });
  }

  parseCuringa(array) {
    return {
      Crafter: array[0],
      Data: moment(array[1], 'DD/MM/YYYY'),
      Lider: array[2],
      Cliente: array[3],
      OKR: array[4] === 'TRUE',
      Imagem: array[5],
      Pontos: Number(array[6])
    };
  }
}

export default new CuringasRepo();
