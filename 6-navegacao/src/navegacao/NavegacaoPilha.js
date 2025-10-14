import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TelaConfiguracao from '../telas/TelaConfiguracao';
import TelaDetalhes from '../telas/TelaDetalhes';
import TelaInicial from '../telas/TelaInicial';

//Inicialiazando o modo de navegação
const Stack = createNativeStackNavigator();

export default function NavegacaoPilha(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Inicial' component={TelaInicial}/>
            <Stack.Screen name='Configurações' component={TelaConfiguracao} />
            <Stack.Screen name='Detalhes' component={TelaDetalhes} />
        </Stack.Navigator>
    );
}