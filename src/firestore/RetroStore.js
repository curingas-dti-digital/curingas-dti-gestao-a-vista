import { db } from './../FirebaseConfig';

class RetroStore {
  listarItemRetro(callback) {
    db.collection('retro').onSnapshot(snapshot => {
      callback(
        snapshot.docs.map(doc => {
          return { id: doc.id, data: doc.data() };
        })
      );
    });
  }

  salvarItemRetro(item) {
    db.collection('retro').add(item.data);
  }

  atualizarItemRetro(item) {
    db.collection('retro')
      .doc(item.id)
      .update(item.data);
  }

  excluirItemRetro(item) {
    db.collection('retro')
      .doc(item.id)
      .delete();
  }
}

export default new RetroStore();
