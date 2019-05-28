import { db } from '../FirebaseConfig';

class EventoStore {
  listarEvento(callback) {
    db.collection('eventos').onSnapshot(snapshot => {
      callback(
        snapshot.docs.map(doc => {
          return { id: doc.id, data: doc.data() };
        })
      );
    });
  }

  criarEvento(evento) {
    db.collection('eventos').add(evento.data);
  }

  excluirEvento(evento) {
    db.collection('eventos')
      .doc(evento.id)
      .delete();
  }
}

export default new EventoStore();
