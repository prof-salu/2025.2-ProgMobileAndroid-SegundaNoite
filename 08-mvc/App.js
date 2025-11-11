import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView,  } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-web';

import Lembrete from './src/components/Lembrete';

export default function App() {
  const [lembretes, setLembretes] = useState([
    {id : 1, titulo: 'lembrete 01', conteudo : 'atividade abc', criacao : Date.now(), finalizado: false}
  ]);
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [editando, setEditando] = useState(null);

  function salvarLembrete(){
    if (titulo.trim() === '' || conteudo.trim() === ''){
      return;
    }

    if(editando){
      setLembretes(lista => lista.map(item => item.id === editando.id 
                                                                ? {...item, titulo, conteudo}
                                                                : item))
    }else{
      const novoLembrete = {
        id : Date.now().toString(),
        titulo : titulo,
        conteudo : conteudo,
        criacao : Date.now(),
        finalizado : false,
      };
      setLembretes(lista => [...lista, novoLembrete]);
    }
    setEditando(null),
    setTitulo('');
    setConteudo('');
  }

  function apagarLembrete(id){
    setLembretes(lista => lista.filter(item => item.id !== id));
  }

  function editarLembrete(lembrete){
    setEditando(lembrete);
    setTitulo(lembrete.titulo);
    setConteudo(lembrete.conteudo);
  }

  function finalizarLembrete(id, status){
    setLembretes(lista => lista.map(item => item.id === id 
                                            ? {...item, finalizado: status}
                                            : item));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Título' 
                   value={titulo} onChangeText={setTitulo}/>

        <TextInput style={styles.input} placeholder='Conteúdo' 
                   value= {conteudo} onChangeText={setConteudo}/>

        <Button title='Gravar' onPress={salvarLembrete}/>
      </View>

      <FlatList 
        style={styles.lista}
        data={lembretes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Lembrete item={item} 
                    onApagar={apagarLembrete} 
                    onEditar={editarLembrete} 
                    onFinalizar={finalizarLembrete}/>
        )}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#f0f0f0',
  },inputContainer: {
    padding: 15, backgroundColor: 'white', borderRadius: 5, marginBottom: 20,
  }, input: {
    height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10,
    borderRadius: 5,
  }, lista: {
    marginTop: 10,
  }
});
