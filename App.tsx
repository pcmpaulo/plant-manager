import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import AppLoading from "expo-app-loading";
import { useFonts, Jost_400Regular, Jost_600SemiBold} from "@expo-google-fonts/jost";

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded, ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) {return <AppLoading />}

  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
