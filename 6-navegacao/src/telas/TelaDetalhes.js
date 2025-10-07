import {Text, View, StyleSheet} from 'react-native';

export default function TelaDetalhes(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela Detalhes</Text>
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