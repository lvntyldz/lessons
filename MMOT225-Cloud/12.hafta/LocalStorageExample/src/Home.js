import React from 'react';
import { Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

    }


    handleOnPress = async () => {
        let user = {
            firstname: 'Ali',
            lastname: 'ALİOĞLU'
        }

        let userList = this.state.users;
        userList.push(user);


        await AsyncStorage.setItem(JSON.stringify(userList));

        console.warn("add user - user : ", user);

        this.setState({ users: userList });

    }

    render() {

        return (<View style={{ margin: 20 }}>
            <Button title="add user" onPress={() => this.handleOnPress()} />

            {
                this.state.users.map((v, k) => {
                    return <Text>{v.firstname} - {v.lastname}</Text>
                })

            }

        </View>)
    }

}