import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider, useSelector} from 'react-redux'
import {LoginScreen} from './src/screens/loginScreen';
import {store} from './src/state';
import {userSelectors} from './src/state/user';
import {HomeScreen} from './src/screens/homeScreen';
import './src/api/axios'
import {CharacterDetailScreen} from './src/screens/characterDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

const Navigation = () => {
  const userToken = useSelector(userSelectors.token)
  return (
    <NavigationContainer>
      {!!userToken ? <LoggedStack/> : <UnLoggedStack/>}
    </NavigationContainer>
  )
}

const UnLoggedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}
const LoggedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Stack.Navigator>
  )
}

export default App;
