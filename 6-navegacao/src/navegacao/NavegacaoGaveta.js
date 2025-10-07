import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaConfiguracao from '../telas/TelaConfiguracao';
import TelaDetalhes from '../telas/TelaDetalhes';
import TelaInicial from '../telas/TelaInicial';

//Inicialiazando o modo de navegação
const Drawer = createDrawerNavigator();

export default function NavegacaoGaveta(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Inicial' component={TelaInicial}/>
            <Drawer.Screen name='Configurações' component={TelaConfiguracao} />
            <Drawer.Screen name='Detalhes' component={TelaDetalhes} />
        </Drawer.Navigator>
    );
}