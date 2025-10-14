import { StyleSheet, Text, View, TextInput, 
         Button, Alert, ActivityIndicator, Platform } from 'react-native';

import { useState } from 'react';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  async function buscaCep(){
    if(cep.trim() === '' || cep.length < 8){
      if (Platform.OS == 'web'){
        //Apenas no navegador
        alert('O campo deve estar preenchido e possuir 8 digitos!');
      }else{
        //Android ou IOS
      Alert.alert('Erro', 'O campo deve estar preenchido e possuir 8 digitos!');
      }      
      return;
    }
    setEndereco(null);
    setErro(null);
    setCarregando(true);
    try{//Tenta executar um trecho de códiugo que pode vir a dar problema
      //Resposta/pergunta enviada a API
      const resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json');
      //Armazena os dados enviados pela API
      const data = await resposta.json();
      console.log(data);
      if(data.erro){
        setErro('CEP não encontrado!');
      }else{
        setEndereco(data);
      }    
    }catch(error){ //Captura o erro ocasionado
      setErro('Ocorreu um erro ao busca o CEP');
    }finally{//Sempre sera executado, mesmo se ocorreu um erro
      setCarregando(false);
      setCep('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Busca CEP</Text>

        <TextInput  style={styles.entrada} placeholder='Digite o CEP' 
                    keyboardType='numeric' maxLength={8}
                    value={cep} onChangeText={setCep}/>

        <Button title='Buscar' onPress={buscaCep} disabled={carregando}/>

        {carregando == true && <ActivityIndicator size={'large'} color={'red'}/>}

        {erro && <Text style={styles.erro}>Erro: {erro}</Text>}

        {endereco && (
          <View style={styles.endereco}>
            <Text style={styles.dados}>CEP: {endereco.cep}</Text>
            <Text style={styles.dados}>Logradouro: {endereco.logradouro}</Text>
            <Text style={styles.dados}>Bairro: {endereco.bairro}</Text>
            <Text style={styles.dados}>Cidade: {endereco.localidade}</Text>
            <Text style={styles.dados}>Estado: {endereco.uf}</Text>
            <Text style={styles.dados}>Região: {endereco.regiao}</Text>
          </View>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#f0f4f8', alignItems: 'center', justifyContent: 'center',
  }, card: {
    width: '90%', padding: 20, backgroundColor: 'white', borderRadius: 10,
  }, titulo: {
    fontSize: 22, textAlign: 'center', fontWeight: 'bold', marginBottom: 20,
  }, entrada: {
    fontSize: 16, height: 45, borderColor: '#ccc', paddingHorizontal: 10, 
    marginBottom: 10, borderRadius: 10, borderWidth: 1,
  }, erro: {
    color: 'red', fontSize: 16, fontWeight: 'bold', marginTop: 10, padding: 10,
  }, endereco: {
    marginTop: 10, borderRadius: 10, padding: 10, borderWidth: 1
  }, dados: {
    fontSize: 16, textAlign: 'justify', marginBottom: 10,
  }
});
