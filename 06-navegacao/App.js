import { NavigationContainer } from "@react-navigation/native";
import NavegacaoAbas from "./src/navegacao/NavegacaoAbas";
import NavegacaoGaveta from "./src/navegacao/NavegacaoGaveta";
import NavegacaoPilha from "./src/navegacao/NavegacaoPilha";

export default function App() {
  return (
   <NavigationContainer>
    <NavegacaoPilha />
   </NavigationContainer>
  );
}