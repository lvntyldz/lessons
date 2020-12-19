import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Zomato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: null
        }
    }


    /**
     * 
     * {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    curl -X GET --header "Accept: application/json" --header "user-key: f0afaa92f90b8c605f3f95afbf704506" "https://developers.zomato.com/api/v2.1/categories"

     */

    componentDidMount() {

        fetch("https://developers.zomato.com/api/v2.1/cities?q=ist"
            , {
                method: 'GET',
                headers: {
                    "user-key": "f0afaa92f90b8c605f3f95afbf704506"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ city: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });
    }

    render() {

        console.warn("city : ", this.state.city)

        if (!this.state.city) {
            return null;
        }

        return (
            <View>
                <Text>Country : {this.state.city.location_suggestions[0].country_name}</Text>
                <Text>Name : {this.state.city.location_suggestions[0].name}</Text>
            </View>
        );
    }
}