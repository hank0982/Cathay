import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import RegisterStyle from '../StyleSheets/RegisterStyle';
import Button from 'apsl-react-native-button';
import { TextField } from 'react-native-material-textfield';
import {RegisterAPI} from '../API/APIs';
export default class Login extends React.Component {
    constructor(){
      super();
      this.state = {
          username: '',
          password: '',
          repwd:''
      }
    }
    onSubmitPress(){
          if(RegisterAPI.SignUpAPI(this.props.screenProps.firebase, this.state.username, this.state.password, this.state.repwd) != -1){
            this.props.navigation.navigate('Pre');
          }else{
            //stay on the login page while the API will have alert msg pop up.
            //MAYBE NEED TO BE FURTHER IMPLEMENTED!!
            //(I DUNNO IF STAYING ON THE SAME PAGE NEEDS TO WRITE ANYTHING~)
          }
    }
    static navigationOptions = RegisterStyle.navigationOptions;
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={RegisterStyle.stylesheet.container}>
            <View style = {{width: '70%'}}>
            <TextField baseColor={RegisterStyle.textInput.baseColor} tintColor={RegisterStyle.textInput.tintColor} label='Username' textColor = {RegisterStyle.textInput.textColor} onChangeText = {(username) => this.setState({username: username})}/>
            <TextField baseColor={RegisterStyle.textInput.baseColor} tintColor={RegisterStyle.textInput.tintColor} label='Password' secureTextEntry={true} textColor = {RegisterStyle.textInput.textColor}  onChangeText = {(password) => this.setState({password: password})}/>
            <TextField baseColor={RegisterStyle.textInput.baseColor} tintColor={RegisterStyle.textInput.tintColor} label='Re-Password' secureTextEntry={true} textColor = {RegisterStyle.textInput.textColor}  onChangeText = {(repwd) => this.setState({repwd: repwd})}/>
                <View style = {{paddingTop: 20}}>
                    <Button style={{backgroundColor: '#016565'}} textStyle={{fontSize: 18, color: '#E9ECEB'}} onPress={()=>this.onSubmitPress()}>
                        Submit
                    </Button>
                </View>
            </View>
        </View>
      );
    }
  };
