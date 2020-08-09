/* eslint-disable global-require */
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card } from 'react-native-superdda-iupay';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
    'NunitoSans-ExtraBold': require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
    'NunitoSans-Light': require('./assets/fonts/NunitoSans-Light.ttf'),
    'NunitoSans-Regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'NunitoSans-SemiBold': require('./assets/fonts/NunitoSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Card
          type="netflix"
          isDue
          cnpj="99.999.0001/99"
          text="This is a sample text"
          containerStyle={{ marginBottom: 20 }}
          value={49.9}
        />

        <Card
          type="lightBill"
          dueDate={new Date()}
          cnpj="99.999.0001/99"
          isPaid
          text="Bandeira Amarela"
          lightBillFlagStatus="yellow"
          value={121.45}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f78c49',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    minWidth: 414,
  },
});
