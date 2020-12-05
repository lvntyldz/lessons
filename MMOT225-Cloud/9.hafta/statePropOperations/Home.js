import React from 'react';
import {View,Text,StyleSheet,Platform,ScrollView, TouchableOpacity} from 'react-native';
import Button from './Button';

export default class Home extends React.Component {

    constructor(props){
        super(props)
        console.warn("1- constructor çalıştı");
        this.state = {
            count:0,
        }
    }

    componentDidMount(){
        console.warn("3-componentDidMount çalıştı");
    }

    increaseCount = () => {
        const newCount = this.state.count;
        this.setState({count:newCount+1});
    }


    decreaseCount = () => {
        const newCount = this.state.count;
        this.setState({count:newCount-2});
    }

    render(){

        console.warn("2- render çalıştı");

        let message = "";

        if(Platform.OS==='ios'){
            message = "ios üzerinde çalışıyorum"
        }else {
            message = "android üzerinde çalışıyorum"
        }



        return(
            <View style={{backgroundColor:'red',maxHeight:400}}>

                <View style={style.row3}>
                    <Text style={style.textStyle}>
                        Home Screen
                    </Text>
                    <Text>
                        Okan
                    </Text>
                    <Text>{message}</Text>

                    <Text> count : {this.state.count}</Text>
                    <Button title="Artır" onOkanPress={()=>this.increaseCount()} />
                    <Button title="Azalt" onOkanPress={()=>this.decreaseCount()} />
                    <TouchableOpacity onPress={()=>this.setState({count:0})}>
                        <Text>Sıfırla</Text>
                    </TouchableOpacity>

                </View>

                <ScrollView style={style.scrollStyle}>

                    <View style={style.row1}>
                        <Text>Row1</Text>
                    </View>

                    <View style={style.row2}>
                        <Text>Row2</Text>
                    </View>

                    <View style={style.row5}>
                        <Text>Row5</Text>
                    </View>

                    <View style={style.row6}>
                        <Text>Row6</Text>
                    </View>

                    <View style={style.row6}>
                        <Text>Row6</Text>
                    </View>
                </ScrollView>
                

            </View>
        )

    }

}

const style = StyleSheet.create({
    scrollStyle:{
        minHeight:200,  
        borderWidth:1,
    },
    textStyle:{
        backgroundColor:'blue',
    },
    row1:{
        flex:1,
        backgroundColor:'steelblue',
        minHeight:300,
        
    },
    row2:{
        flex:5,
        minHeight:300,
        backgroundColor:'skyblue'
    },
    row3:{
        flex:1,
        minHeight:300,
        backgroundColor:'yellow',
    },
    row4:{
        flex:1,
        minHeight:300,
        backgroundColor:'yellow',
    },
    row5:{
        flex:1,
        minHeight:300,
        backgroundColor:'yellow',
    },
    row6:{
        flex:1,
        minHeight:300,
        backgroundColor:'yellow',
    }
});