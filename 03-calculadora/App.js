import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  function somar(){
    setResultado(Number(valor1) + Number(valor2));
  }

  function subtrair(){
    setResultado(Number(valor1) - Number(valor2));
  }

  function multiplicar(){
    setResultado(Number(valor1) * Number(valor2));
  }

  function dividir(){
    setResultado(Number(valor1) / Number(valor2));
  }
  return (
    <View style={styles.container}>
     <View style={styles.calculadora}>
      <Text style={styles.titulo}>Calculadora</Text>
      <TextInput 
        style={styles.entrada} 
        placeholder='Valor 01'
        keyboardType='number-pad'
        value={valor1}
        onChangeText={setValor1}/>

      <TextInput 
        style={styles.entrada} 
        placeholder='Valor 02'
        value={valor2}
        keyboardType='number-pad'
        onChangeText={setValor2}/>
     </View>

     <View style={styles.botoes}>
      <Button title='+' color='red' onPress={somar}/>
      <Button title='-' color='green' onPress={subtrair}/>
      <Button title='*' color='orange' onPress={multiplicar}/>
      <Button title='/' color='purple' onPress={dividir}/>
     </View>

     <View style={styles.resultado}>
      <Text style={styles.saida}>Resultado: {resultado}</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center',
    justifyContent: 'center',
  }, titulo: {
    fontWeight: 'bold', fontSize: 26, alignSelf: 'center',
    textTransform: 'uppercase',
  }, entrada: {
    fontSize: 20, borderWidth: 1, borderRadius: 10, padding: 10,
    marginVertical: 10,
  }, botoes: {
    flexDirection: 'row', justifyContent: 'space-around',
    alignItems: 'center', width: '20%'
  }, saida: {
    fontSize: 22, borderWidth: 1, borderRadius: 10, padding: 10,
    borderStyle: 'dotted', marginVertical: 10, width: 250
  }
});
