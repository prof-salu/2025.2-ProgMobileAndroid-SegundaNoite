// /src/dao/LembreteDAO.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE_LEMBRETES = '@lembretesApp:lembretes';

export async function obterTodos(){
    try{
        const jsonValue = await AsyncStorage.getItem(CHAVE_LEMBRETES);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    }catch(error){
        console.log("Erro ao ler os lembretes.");
        return [];
    }
}

export async function gravarTodos(lembretes){
    try{
        const jsonValue = JSON.stringify(lembretes);
        await AsyncStorage.setItem(CHAVE_LEMBRETES, jsonValue);
    }catch(error){
        console.log("Erro ao salavar os lembretes.");
    }
}