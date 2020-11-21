import * as React from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class AppList2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'mehmet',
    };
    console.warn('1-constructor run...');
  }

  componentDidMount() {
    console.warn('3-componentDidMount running...');
  }

  handlePress() {
    this.setState({firstname: 'Hasan'});
    console.warn('handlePress clicked');
  }

  render() {
    console.warn('2- render is running....');

    let message = '';

    if (Platform.OS === 'ios') {
      message = 'Hello from ios';
    } else {
      message = 'Hello from Android';
    }

    let listData = [
      {id: 123, val: 'ali'},
      {id: 124, val: 'veli'},
      {id: 125, val: 'ahmet'},
    ];

    return (
      <View>
        <Text>{message}</Text>
        <Text>firstname : {this.state.firstname}</Text>
        <FlatList
            style={styles.flatlistStyle}
          data={listData}
          renderItem={({item}) => (
            <View style={styles.itemView}>
              <Text id={item.id}>{item.val}</Text>
            </View>
          )}
        />

        <TouchableOpacity onPress={() => this.handlePress()}>
          <Text>Button</Text>
        </TouchableOpacity>

        <ScrollView style={styles.scrollStyle}>
          <View style={styles.row}>
            <Text>Hello1</Text>
          </View>

          <View style={styles.row}>
            <Text>Hello2</Text>
          </View>

          <View style={styles.row}>
            <Text>Hello3</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'steelblue',
    height: 100,
    margin: 10,
  },
  scrollStyle: {
    backgroundColor: 'red',
    flex: 1,
    minHeight: 150,
  },
  flatlistStyle:{
    flex: 1,
    minHeight: 200,
  },
  itemView: {
    borderWidth: 1,
    margin: 5,
    padding: 10,
    backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
  },
});
