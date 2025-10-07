import {Text, View, StyleSheet} from 'react-native';

export default function TelaConfiguracao(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela Configuração</Text>
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