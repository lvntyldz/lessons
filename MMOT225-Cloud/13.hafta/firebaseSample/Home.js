import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import FB from './Firebase';

export default class Home extends React.Component {

    onAddUserPress = () => {
        //levent.yildiz@okan.edu.tr 

        FB.auth()
            .createUserWithEmailAndPassword("levent.yildiz@okan.edu.tr", "a123456")
            .then(r => {
                console.warn("User created");
            })
            .catch(e => {
                console.warn("Error : ", e);
            });

    }

    handleLoginPress = () => {

        FB.auth()
            .signInWithEmailAndPassword("levent.yildiz@okan.edu.tr", "a123456")
            .then(r => {
                console.warn("response :", r);
            })
            .catch(e => {
                console.warn("error : ", e);
            });

    }

    handleOnAddProductPress = () => {
        const dataToDB = {
            id: 1,
            name: "iphone1",
            price: 1234
        }

        FB.database()
            .ref("product1")
            .set(dataToDB)
            .then(r => {
                console.warn("işlem başarılır")
            })
            .catch(e => {
                console.warn("error : ", e);
            });
    }

    render() {

        return (
            <View>
                <Text>Hello From Home</Text>
                <TouchableOpacity onPress={() => this.onAddUserPress()}>
                    <Text>Add new user</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => this.handleLoginPress()}>
                    <Text>Login User</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleOnAddProductPress()}>
                    <Text>Add Product To FB DB</Text>
                </TouchableOpacity>
            </View>
        );
    }

}