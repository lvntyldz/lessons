import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  render() {
    let listData = [
      { id: 123, val: 'Ali' },
      { id: 124, val: 'Veli' },
      { id: 125, val: 'Durali' },
    ];

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listStyle}
          data={listData}
          renderItem={({ item }) => (
            <View style={styles.itemCtr}>
                        <Text id={item.id} style={styles.item}>
              {item.val}
            </Text>
            </View>

          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  itemCtr:{
    borderWidth:1,
    margin:2,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  listStyle: {
    borderWidth: 1,
    margin: 2,
    padding: 10,
  },
});
