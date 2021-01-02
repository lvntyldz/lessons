import React from 'react';
import { Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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


        await AsyncStorage.setItem("USERS", JSON.stringify(userList));

        console.warn("add user - user : ", user);

        this.setState({ users: userList });

    }

    handleListOnPress = async () => {

        const userList = await AsyncStorage.getItem("USERS");
        console.warn("userList : ", userList);
        this.setState({ users: JSON.parse(userList) });
    }

    handleDeleteOnPress = () => {

        AsyncStorage.removeItem("USERS").then(r => {
            this.setState({ users: [] });
        }).catch(e => {
            console.warn("error : ", e);
        })

    }


    render() {

        return (<View style={{ margin: 20 }}>
            <Button title="add user" onPress={() => this.handleOnPress()} />
            <Button title="list user" onPress={() => this.handleListOnPress()} />
            <Button title="delete user" onPress={() => this.handleDeleteOnPress()} />

            {
                this.state.users.map((v, k) => {
                    return <Text key={k} >{v.firstname} - {v.lastname}</Text>
                })

            }

        </View>)
    }

}