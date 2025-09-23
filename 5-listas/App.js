import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [lista, setLista] = useState([
    {id : 1, tarefa : 'Prova de React Native'},
    {id : 2, tarefa : 'Ir ao cinema'},
    {id : 3, tarefa : 'Finalizar livro'},    
  ]);

  const [entrada, setEntrada] = useState('');

  function adicionarTarefa(){
    //Ignora caso o campo esteja vazio
    if (entrada.trim() === ''){
      return;
    }

    const novaTarefa = {
      id : String(Date.now()),
      tarefa : entrada
    }
    //Adiciona o item a lista de tarefas
    setLista([...lista, novaTarefa]);
  }

  function removeTarefa(idTarefa){
    const novasTarefas = lista.filter(tarefa => tarefa.id !== idTarefa);

    setLista(novasTarefas);
  }
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.entradas}>
        <TextInput  style={styles.textoEntrada} placeholder='Nova tarefa' 
                    value={entrada} onChangeText={setEntrada}/>

        <Button title='Adicionar' color='purple' onPress={adicionarTarefa}/>
      </View>

      <FlatList 
          data={lista}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.itemLista}>
              <Text style={styles.itemTexto}>{item.id} - {item.tarefa}</Text>
              <Button title='apagar' onPress={() => removeTarefa(item.id)}/>
            </View>
          )}
          />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff',  marginTop: 20,
  }, entradas: {
    flexDirection: 'row', marginHorizontal: 10, 
  }, textoEntrada: {
    fontSize: 24, borderWidth: 1, borderRadius: 10, padding: 5, flex: 1, marginRight: 10, 
  }, itemLista: {
   padding: 10, marginBottom: 5, borderWidth: 1, borderRadius: 5, margin: 10, 
   flexDirection: 'row',
  }, itemTexto: {
    fontSize: 20, flex: 1,
  }
});
