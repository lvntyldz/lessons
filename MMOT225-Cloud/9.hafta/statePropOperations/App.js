import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import Home from './Home';

const App: () => React$Node = () => {
  return (
      <SafeAreaView style={{flex:1}}>
        <Home />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
