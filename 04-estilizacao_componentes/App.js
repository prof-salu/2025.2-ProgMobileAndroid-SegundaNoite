import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

//Novos componentes devem começar com MAIUSCULAS
import MeuCard from './src/componentes/MeuCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <MeuCard nome='Juca Pereira' email='juca.pereira@email.com' foto={'favicon.png'}/>

      <MeuCard nome='Ana Caroline' email='ana.carol@email.com'foto={'favicon.png'}/>

      <MeuCard nome='Pedro Alvorada' email='pedro.alvorada@email.com'/>  

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  }
});
