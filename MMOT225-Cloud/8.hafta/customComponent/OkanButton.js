import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class OkanButton extends React.Component {

     handlePress = () => {
        //alert("tıklandı");
        this.props.onPress();
    }


    render(){

        const buttonType = this.props.buttonType;
        let buttonBg = '#FFF';

        if(buttonType==='danger'){
            buttonBg = 'red';
        }else if (buttonType==='success'){
            buttonBg = 'green';
        }else if(buttonType==='warn'){
            buttonBg='yellow';
        }else if(buttonType==='info'){
            buttonBg='steelblue'
        }


        return (
            <TouchableOpacity 
            onPress={()=>this.handlePress()}  
            style={{backgroundColor:buttonBg, flex:1,minHeight:200}}
            >
            <Text>Okan Butonu</Text>
            </TouchableOpacity>
        )

    }

}
