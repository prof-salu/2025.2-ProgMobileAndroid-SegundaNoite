import { StyleSheet, Text, View, Image} from 'react-native';

export default function MeuCard({foto, nome, email}) {
  return (
      <View style={styles.cardContainer}>
        <View style={styles.imagemContainer}>
        
          {(foto != undefined)  
            ?   (<Image style={styles.imagem} source={require('../../assets/favicon.png')}/>)
            :   (<Text style={styles.textoImagem}>Sem imagem</Text>)}
        </View>

        <View style={styles.textoContainer}>
          <Text style={styles.infos}>Nome: {nome}</Text>
          <Text style={styles.infos}>E-mail: {email}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    height: 100,
    marginHorizontal: 10,    
    backgroundColor: 'cyan',
    marginBottom: 10,
    padding: 10,
  }, imagemContainer: {
    backgroundColor: '#90acddff',
    borderRadius: 50,
    borderWidth: 1,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed'
  },textoContainer: {
    flex: 1, 
    paddingHorizontal: 10,
    justifyContent: 'center',
  }, textoImagem: {
    color: '#FFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  }, infos: {
    fontSize: 22,
    fontStyle: 'italic',
  }, imagem: {
    width: 60,
    height: 60,
  }
});
