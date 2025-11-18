import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

import TelaHome from './src/telas/TelaHome';
import TelaLogin from './src/telas/TelaLogin';

export default function App() {
  const [user, setUser] = useState(null);
  const [inicializando, setInicializando] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUser(usuarioFirebase);
      if(inicializando){
        setInicializando(false);
      }
    });

    return unsubscribe;
  }, []);

  if(inicializando){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
        <ActivityIndicator size='large' color={'#007bff'}/>
      </View>
  );}

  return user ? <TelaHome user={user}/> : <TelaLogin />
}