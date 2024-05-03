import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/MainComponent';
import {NavigationContainer } from '@react-navigation/native';
//import { Provider } from 'react-redux';
//import { persistor, store } from './redux/store';
//import { PersistGate } from 'redux-persist/integration/react';
//import Loading from './components/LoadingComponent';

export default function App() {
  return (
      <NavigationContainer>
        <Main />
      </NavigationContainer>
  );
}