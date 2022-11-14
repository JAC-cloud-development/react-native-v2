import React, {useEffect, useRef, useState} from 'react';
import {Pressable, TextInput, StyleSheet, View, Text} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useDispatch, useSelector} from 'react-redux';
import {setUserToken, userSelectors} from '../state/user';
import {Button} from '../components/button';

export const LoginScreen = ({componentId}) => {
  const dispatch = useDispatch();
  const userToken = useSelector(userSelectors.token);
  const [email, setEmail] = useState('mrc.brugali@gmail.com');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);

  console.log({userToken});

  const onPressLogin = () => {
    console.log({email, password});
    setLoading(true);

    setTimeout(() => {
      if (email === 'mrc.brugali@gmail.com' && password === 'password') {
        // CHIAMATA AL SERVER
        // l'utente viene loggato
        const token = 'Ciao';
        dispatch(setUserToken(token));
        return;
      }
      setLoading(false);
    }, 1000);

  };

  return (
    <View style={styles.container}>
      {/*<KeyboardAwareScrollView>*/}
        <Text style={styles.title}>TITOLO</Text>
        <TextInput placeholder={'Email'} style={styles.input} onChangeText={setEmail} value={email} />
        <TextInput placeholder={'Password'} style={styles.input} onChangeText={setPassword} value={password} secureTextEntry />
        <Button text={'login'} loading={loading} onPress={onPressLogin} />
        <Text>Il tuo token è: {userToken}</Text>
      {/*</KeyboardAwareScrollView>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    marginVertical: 10,
    fontSize: 14,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});

