import React from 'react';
import {SafeAreaView, StyleSheet, View, TextInput, Button} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.header}>
          <TextInput style={styles.textView} />
          <Button title="Submit Butonu" />
        </View>

        <View style={styles.body}>
          <View style={styles.left} />
          <View style={styles.right} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: 'blue'},
  textView: {
    borderWidth: 1,
    height: 60,
  },
  header: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  left: {
    backgroundColor: 'blue',
    flex: 19,
  },
  right: {
    backgroundColor: 'skyblue',
    flex: 9,
  },
});

export default App;
