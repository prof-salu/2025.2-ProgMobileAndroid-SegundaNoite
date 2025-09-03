//Import das bibliotecas
import {View, Text, StyleSheet, Image, Button} from 'react-native';


//Função principal
export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Primeira aula de React native!</Text>

      <Image 
        style={styles.imagem} 
        source={{uri : 'https://static.vecteezy.com/ti/fotos-gratis/t2/42730459-leao-perigo-animal-animais-selvagens-natureza-floresta-foto.jpg'}}/>

      <Image 
        style={styles.imagem}
        source={require('./assets/passaro.jpg')}/>

        <Button 
          title='Clique aqui' 
          color={'orange'}
          onPress={() => alert('React native!')}/>
    </View>
  )
}

//Area de estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    alignItems: 'center'
  }, texto: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }, imagem: {
    width: 200,
    height: 200,
    marginBottom: 10,
  }
})