import {db} from '../../firebaseconfig';
import { collection, addDoc, updateDoc, deleteDoc,
         doc, onSnapshot } from 'firebase/firestore';

const NOME_COLECAO = 'lembretes';
//Cria/atualiza uma nova coleçao no firebase chamada lembretes
const lembretesCollection = collection(db, NOME_COLECAO);

export function adicionar(lembrete){
    return addDoc(lembretesCollection, lembrete);
}

export function apagar(id){
    const lembreteDoc = doc(db, NOME_COLECAO, id);
    return deleteDoc(lembreteDoc);
}

export function editar(id, lembrete){
    const lembreteDoc = doc(db, NOME_COLECAO, id);
    return updateDoc(lembreteDoc, lembrete);
}

export function listar(callback){
    return onSnapshot(lembretesCollection, snapshot => {
        const lembretes = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        callback(lembretes);
    });    
}