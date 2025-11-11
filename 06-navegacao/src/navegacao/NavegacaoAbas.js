import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaConfiguracao from '../telas/TelaConfiguracao';
import TelaDetalhes from '../telas/TelaDetalhes';
import TelaInicial from '../telas/TelaInicial';

//Inicialiazando o modo de navegação
const Tab = createBottomTabNavigator();

export default function NavegacaoAbas(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Inicial' component={TelaInicial}/>
            <Tab.Screen name='Configurações' component={TelaConfiguracao} />
            <Tab.Screen name='Detalhes' component={TelaDetalhes} />
        </Tab.Navigator>
    );
}