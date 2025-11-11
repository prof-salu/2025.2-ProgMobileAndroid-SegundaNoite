//src/components/Lembrete.js

import { View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';

export default function Lembrete({item, onApagar, onEditar, onFinalizar}){

    const dataFormatada = new Date(item.criacao).toLocaleDateString('pt-BR');
    return(
        <View style={styles.itemContainer}>
            <View style={styles.infoContainer}>
                <Text style={[styles.titulo, item.finalizado && styles.textoFinalizado]}>{item.titulo}</Text>
                <Text style={[styles.conteudo, item.finalizado && styles.textoFinalizado]}>{item.conteudo}</Text>
                <Text style={styles.data}>Criado em: {dataFormatada}</Text>
            </View>
            <View style={styles.acoesContainer}>
                <Switch 
                    trackColor={{false : '#767577', true: '#81b0ff'}}
                    thumbColor={item.finalizado ? '#f5dd4b' : '#f4f3f4'}
                    value={item.finalizado}
                    onValueChange={() => onFinalizar(item.id, !item.finalizado)}/>

                <TouchableOpacity style={styles.botaoEditar} onPress={() => onEditar(item)}>
                    <Text style={styles.botaoTexto}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoApagar} onPress={() => onApagar(item.id)}>
                    <Text style={styles.botaoTexto}>Apagar</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15, backgroundColor: 'white', borderRadius: 5, marginBottom: 10, 
    }, infoContainer: {
        marginBottom: 10,
    }, titulo: {
        fontSize: 18, fontWeight: 'bold',
    }, conteudo: {
        fontSize: 14, color: '#555', marginTop: 5,
    }, data: {
        fontSize: 12, color: '#999', marginTop: 10,
    }, acoesContainer: {
        flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', borderTopWidth: 1, 
        borderTopColor: '#eee', paddingTop: 10, marginTop: 5,
    }, botaoEditar: {
        paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#007bff', marginLeft: 10, 
        borderRadius: 5, 
    }, botaoApagar: {
        paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#dc3545', marginLeft: 10, 
        borderRadius: 5,
    }, botaoTexto: {
        color: 'white',
    }, textoFinalizado: {
        textDecorationLine: 'line-through', color: '#aaa'
    }
})