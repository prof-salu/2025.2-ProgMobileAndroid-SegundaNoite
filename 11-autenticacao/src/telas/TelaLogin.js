import { use, useState } from 'react';
import {View, StyleSheet, Text, TextInput, Alert,
        TouchableOpacity, Platform} from 'react-native';

import {auth} from '../../firebaseConfig';
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword } from 'firebase/auth';

export default function TelaLogin(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ehCadastro, setEhCadastro] = useState(false);
    const [carregando, setCarregando] = useState(false);

    async function autenticar(){
        if(!email || !senha){
            if(Platform.OS === 'web'){
                alert('Erro! Preencha todos os campos!');
            }else{
                Alert.alert('Erro!', 'Preencha todos os campos!');
            }            
        }
        
        setCarregando(true);

        try{
            if(ehCadastro){
                //Criar conta
                await createUserWithEmailAndPassword(auth, email, senha);
                if(Platform.OS === 'web'){
                    alert('Sucesso! Usuário criado com sucesso!');
                }else{
                    Alert.alert("Sucesso!", 'Usuário criado com sucesso!');
                }
                
            }else{
                //Fazendo o login
                await signInWithEmailAndPassword(auth, email, senha);
            }
        }catch(error){
            let mensagem = 'ocorreu um erro!';
            if(error.code == 'auth/invalid-email'){
                mensagem = 'E-mail inválido.';
            }
            if(error.code == 'auth/user-not-found'){
                mensagem = 'Usuário não encontrado.';
            }

            if(error.code == 'auth/wrong-password'){
                mensagem = 'Senha incorreta.';
            }

            if(error.code == 'auth/email-already-in-use'){
                mensagem = 'E-mail já cadastrado.';
            }

            if(error.code == 'auth/weak-password'){
                mensagem = 'Senha deve ter pelo menos 6 caracteres!';
            }

            if(Platform.OS === 'web'){
                    alert('Erro!' + mensagem);
                }else{
                    Alert.alert("Erro!", mensagem);
                }
        }finally{
            setCarregando(false);
        }

    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{ehCadastro ? 'Criar conta' : 'Bem-Vindo'}</Text>

            <TextInput style={styles.input} placeholder='Seu e-mail'
                       value={email} onChangeText={setEmail} 
                       autoCapitalize='none' keyboardType='email-address' />
            
            <TextInput style={styles.input} placeholder='Sua senha'
                       value={senha} onChangeText={setSenha}
                       secureTextEntry />
            
            <TouchableOpacity style={styles.botao} 
                              onPress={autenticar} disabled={carregando}>
                <Text style={styles.textoBotao}>{ehCadastro ? 'Cadastrar' : 'Entrar'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.link} 
                              onPress={() => setEhCadastro(!ehCadastro)} disabled={carregando}>
                <Text style={styles.textoLink}>{ehCadastro ? 'Faça o login' : 'Cadastre-se'}</Text>
            </TouchableOpacity>
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', padding: 20,
    }, titulo: {
        fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center',
        color: '#333',
    }, input: {
        backgroundColor: '#fff', padding: 15, borderRadius: 10, 
        marginBottom: 15, borderWidth: 1, borderColor: '#ddd',
    }, botao: {
        backgroundColor: '#007bff', padding: 15, borderRadius: 8, 
        alignItems: 'center',
    }, link: {
        marginTop: 20, alignItems: 'center',
    }, textoBotao: {
        color: '#fff', fontWeight: 'bold', fontSize: 16,
    }, textoLink: {
        color: '#007bff',
    }
})