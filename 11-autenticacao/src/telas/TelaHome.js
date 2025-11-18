// /src/telas/TelaHome.js
import {View, Text, Button, StyleSheet,} from 'react-native';
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';

export default function TelaHome({user}){

    function logout(){
        signOut(auth);
    }

    return(
        <View style={syltes.container}>
            <Text style={syltes.titulo}>Area restrita</Text>
            <Text style={syltes.subtitulo}>Olá, {user.email}</Text>
            <Text style={syltes.texto}>Você está autenticado no sistema. 
                Apenas usuários logados podem ver essa tela. </Text>

            <Button title='Sair' color={'purple'} onPress={logout}/>
        </View>
    )
}

const syltes = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
    }, titulo: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 10,
    }, subtitulo: {
        fontSize: 18, color: '#666', marginBottom: 30,
    }, texto: {
        textAlign: 'center', marginBottom: 40, color: '#444',
    }
});