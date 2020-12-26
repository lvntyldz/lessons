import React from 'react';
import { Text, Button } from 'react-native';

import Home from './Home';
import Profile from './Profile';
import Login from './Login';

export default class AppMain extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: 'Home'
        }
    }


    loadScreenByType = () => {

        if (this.state.screen === "Home") {
            return <Home />
        }

        if (this.state.screen === "Profile") {
            return <Profile />
        }

        return <Login />

    }

    render() {

        return (
            <>
                <Button title="Login" onPress={() => this.setState({ screen: 'Login' })} />
                <Button title="Profile" onPress={() => this.setState({ screen: 'Profile' })} />
                <Button title="Home" onPress={() => this.setState({ screen: 'Home' })} />
                {this.loadScreenByType()}
            </>
        )

    }

}