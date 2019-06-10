import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

class SquadRepo {
  async listarSquads(tribo) {
    return axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Squads'!A:T?key=AIzaSyBGIJGZ64VWP-O9KQPcmr6YaVeZh_O0KLw`
      )
      .then(response => {
        return _.chain(response.data.values)
          .map(this.parseSquad)
          .filter(squad => {
            return squad.Tribo === tribo;
          })
          .value();
      })
      .catch(error => {
        console.log(error);
      });
  }

  parseSquad(array) {
    return {
      Squad: array[0],
      Tribo: array[1],
      DeveloperLeader: array[2],
      Andon: Number(array[3]),
      Estoque: Number(array[4]),
      CheckArquitetural: moment(array[5], 'DD/MM/YYYY'),
      CheckExecucao: moment(array[6], 'DD/MM/YYYY'),
      RetroSprint: moment(array[7], 'DD/MM/YYYY'),
      GroomingEPlanning: Number(array[8]),
      TamanhoDasEstorias: Number(array[9]),
      Burndown: Number(array[10]),
      ReuniaoDiaria: Number(array[11]),
      GestaoAVista: Number(array[12]),
      WorkInProgress: Number(array[13]),
      DtiFlow: Number(array[14]),
      TestesAutomatizados: Number(array[15]),
      SonarQube: Number(array[16]),
      CulturaImplantacao: Number(array[17]),
      ProgressoConcreto: Number(array[18]),
      Score: Number(array[19])
    };
  }
}

export default new SquadRepo();
