import {Text, View, StyleSheet} from 'react-native';

export default function TelaInicial(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela Inicial</Text>
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