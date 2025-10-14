import {Text, View, StyleSheet, Button} from 'react-native';

export default function TelaInicial({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela Inicial</Text>

            <Button title='Detalhes' onPress={() => navigation.navigate('Detalhes')} />
            <Button title='Configurações' onPress={() => navigation.navigate('Configurações')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    }, titulo: {
        fontSize: 24, fontWeight: 'bold',
    }
});