import axios from 'axios';
import * as _ from 'lodash';

class RetroRepo {
  listarRetro() {
    return axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Retro'!A2:F?key=AIzaSyBGIJGZ64VWP-O9KQPcmr6YaVeZh_O0KLw`
      )
      .then(response => {
        const retros = _.chain(response.data.values)
          .map(this.parseRetro)
          .value();
        return retros;
      })
      .catch(error => {
        console.log(error);
      });
  }

  parseRetro(array) {
    return {
      Acao: array[0],
      Responsavel: array[1],
      Status: array[2]
    };
  }
}

export default new RetroRepo();
