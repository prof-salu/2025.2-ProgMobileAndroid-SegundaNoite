import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView, Button } from 'react-native';
import { useState, useEffect } from 'react';

import Lembrete from './src/components/Lembrete';
import * as LembreteDAO from './src/dao/LembreteDAO';

export default function App() {
  const [lembretes, setLembretes] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    async function carregarDados(){
      const dados = await LembreteDAO.obterTodos();
      setLembretes(dados);
    }

    carregarDados()
  }, []);

  async function gravarLembretes(listaAtualizada){
    setLembretes(listaAtualizada);
    await LembreteDAO.gravarTodos(listaAtualizada);
  }

  async function salvarLembrete(){
    if (titulo.trim() === '' || conteudo.trim() === ''){
      return;
    }

    let novaLista = [];

    if(editando){
      /*setLembretes(lista => lista.map(item => item.id === editando.id 
                                                                ? {...item, titulo, conteudo}
                                                                : item));*/
      const lembreteEditado = {
        ...editando,
        titulo : titulo,
        conteudo : conteudo,
      };

      novaLista = lembretes.map(item => (item.id === editando.id) 
                                                    ? lembreteEditado : item);
      //gravarLembretes(novaLista);
      
    }else{
      const novoLembrete = {
        id : Date.now().toString(),
        titulo : titulo,
        conteudo : conteudo,
        criacao : Date.now(),
        finalizado : false,
      };
      //setLembretes(lista => [...lista, novoLembrete]);
      //Adiciona o novoLembrete ao conteudo da lista(lembretes)
      novaLista = [...lembretes, novoLembrete];
      //gravarLembretes(novaLista);
    }
    gravarLembretes(novaLista);
    setEditando(null),
    setTitulo('');
    setConteudo('');
  }

  async function apagarLembrete(id){
    //setLembretes(lista => lista.filter(item => item.id !== id));
    const novaLista = lembretes.filter(item => item.id !== id);
    gravarLembretes(novaLista);
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
    flex: 1, padding: 20, backgroundColor: '#f0f0f0', marginTop: 30,
  },inputContainer: {
    padding: 15, backgroundColor: 'white', borderRadius: 5, marginBottom: 20,
  }, input: {
    height: 45, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10,
    borderRadius: 5,
  }, lista: {
    marginTop: 10,
  }
});
