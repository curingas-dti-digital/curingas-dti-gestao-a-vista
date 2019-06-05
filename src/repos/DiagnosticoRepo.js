import axios from 'axios';
import * as _ from 'lodash';

class DiagnosticoRepo {
  async listarDiagnosticos(tribo) {
    return axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Fast%20check%20Aux'!A1:R?key=AIzaSyBGIJGZ64VWP-O9KQPcmr6YaVeZh_O0KLw`
      )
      .then(response => {
        const diagnosticos = _.chain(response.data.values)
          .filter(fastCheck => {
            return fastCheck[2] === tribo;
          })
          .map(this.parseFastCheck)
          .value();
        return diagnosticos;
      })
      .catch(error => {
        console.log(error);
      });
  }

  parseFastCheck(array) {
    return {
      Squad: array[1],
      Tribo: array[2],
      DeveloperLeader: array[3],
      UltimoGemba: array[4],
      Gember: array[5],
      Cadencia: array[6],
      Score: array[7],
      GroomingEPlanning: array[8],
      TamanhoDasEstorias: array[9],
      Burndown: array[10],
      ReuniaoDiaria: array[11],
      GestaoAVista: array[12],
      WorkInProgress: array[13],
      DtiFlow: array[14],
      TestesAutomatizados: array[15],
      SonarQube: array[16],
      EstoqueDeSprints: array[17]
    };
  }
}

export default new DiagnosticoRepo();
