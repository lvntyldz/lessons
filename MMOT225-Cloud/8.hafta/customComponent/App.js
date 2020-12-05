import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import OkanButton from './OkanButton.js';

const App: () => React$Node = () => {


  function handleOnPress(){
    alert("buttona tıklandı.");

  }

  function handleOkanOnPress(){
    alert("okan butonuna tıklandı");
  }

  return (
      <SafeAreaView>
              <Text>Hello Okan</Text>
              <View style={{backgroundColor:'steelblue'}}>
                <Text style={{color:'#FFF'}}>Cloud Computing</Text>
              </View>
              <ScrollView>
              <Button onPress={()=>handleOnPress()} title="Submit butonu" />
              <OkanButton buttonType='success' onPress={()=>handleOkanOnPress()} />
              <OkanButton buttonType='danger' onPress={()=>handleOkanOnPress()} />
              <OkanButton buttonType='warn' onPress={()=>handleOkanOnPress()} />
              <OkanButton buttonType='info' onPress={()=>handleOkanOnPress()} />
              <OkanButton  onPress={()=>handleOkanOnPress()} />
              </ScrollView>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;