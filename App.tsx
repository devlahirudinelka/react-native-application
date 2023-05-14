/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';
const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Here are some boxcex of different colors
          </Text>

          <View style={[styles.viewOne, styles.box]}>
            <Text >
              Cyan: #2aa198
            </Text>
          </View>
          <View style={[styles.viewTwo, styles.box]}>
            <Text >
              Blue: #268bd2
            </Text>
          </View>
          <View style={[styles.viewThree, styles.box]}>
            <Text >
              Magenta: #d33682
            </Text>
          </View>
          <View style={[styles.viewFour, styles.box]}>
            <Text >
              Orange: #cb4b16
            </Text>
          </View>
          <ColorBox colorName="Cyan" colorHex="#2aa198" />
          <ColorBox colorName="Blue" colorHex="#268bd2" />
          <ColorBox colorName="Magenta" colorHex="#d33682" />
          <ColorBox colorName="Orange" colorHex="#cb4b16" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: 'green',
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  textOne: {
    color: 'black',
    fontWeight: 700,
  },
  viewOne: {
    backgroundColor: '#2aa198',
  },
  viewTwo: {
    backgroundColor: '#268bd2',
  },
  viewThree: {
    backgroundColor: '#d33682',
  },
  viewFour: {
    backgroundColor: '#cb4b16',
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default App;
