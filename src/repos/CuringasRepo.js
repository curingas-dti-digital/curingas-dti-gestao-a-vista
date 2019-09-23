import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

class CuringasRepo {
  listarCuringas() {
    return axios
      .get(`https://one-on-ones-dti.herokuapp.com/api/data_tribe/Curingas`)
      .then(response => {
        return response.data.crafters;
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
