/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, styles.pink]}>
          <Text style={styles.text}>
            Hello , World ! Hi
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'teal',
  },
  container: {
    paddingVertical: 10,
    // paddingHorizontal: 30,
    borderColor: 'white',
    borderRadius: 0,
    borderWidth: 2,
    marginVertical: 0,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontWeight: 900,
  },
  safeArea: {
    flex: 2,
  },
});

export default App;
