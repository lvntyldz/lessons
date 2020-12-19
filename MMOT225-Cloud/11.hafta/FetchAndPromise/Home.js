import React from 'react';
import { Text,View } from 'react-native';


export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            todos:[]
        }

        console.warn("1- constructor");
    }


    samplePromise() {
        return new Promise((resolve, reject) => {
            try {
                resolve("eşitlik doğrulandı");
            } catch (e) {
                reject("eşitlik sağlanamadı");
            }
        })
    }

    async componentWillMount(){
        const todoList =  await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
        this.setState({todos:todoList});
    }

    componentDidMount() {
        console.warn("3- componentDidMount");

        fetch("https://api.randomuser.me/?nat=tr&results=10")
            .then(r => r.json())
            .then(res => res.results)
            .then(ress => {
                //console.warn("res : ",ress);
                this.setState({users:ress});
            }).catch(e => {
                console.warn("e : ", e);
            })

    }


    render() {
        console.warn("2- render");

        this.samplePromise().then(r => {
            console.warn("r : ", r);
        }).catch(e => {
            console.warn("e : ", e);
        })

        return (
            <View style={{flex:1,backgroundColor:'skyblue'}}>
            <Text>Home Screen...</Text>
            {
                this.state.users.map((v,k)=>{
                    return (<Text>{v.name.title} {v.name.first} {v.name.last}</Text>)
                })
            }

{

    this.state.todos.map((v)=>{
        return (<Text>{v.title}</Text>);
    })
}

            </View>
        )

    }
}