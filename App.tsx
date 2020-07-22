import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from "react-native-superdda-iupay";

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Card
        type="netflix"
        dueDate="19 JUL"
        isDue
        cnpj="99.999.0001/99"
        text="This is a sample text"
        value={49.9}
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
