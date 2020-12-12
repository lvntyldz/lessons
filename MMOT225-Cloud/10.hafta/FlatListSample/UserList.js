import React from 'react';
import { Text, View } from 'react-native';

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

        console.warn("1-constructor");
    }

    async componentDidMount() {

        let res = await fetch('https://api.randomuser.me/?nat=tr&results=3')
            .then(r => r.json());

        this.setState({ users: res.results })
    };


    render() {

        console.warn("2-render")

        return (
            <View>
                <Text>UserList Screen</Text>
                {
                    this.state.users.map(v => {
                        return (<Text>{v.name.first}-{v.email}</Text>)
                    })
                }
            </View>
        )

    }


}