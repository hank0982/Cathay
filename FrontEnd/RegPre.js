import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginStyle from '../StyleSheets/LoginStyle';
import Button from 'apsl-react-native-button';
import { TextField } from 'react-native-material-textfield';
import {LoginAPI} from '../API/APIs';
export default class Login extends React.Component {
    constructor(){
      super();
      this.state = {
          username: null,
          password: null
      }
    }
    // Config header check
    static navigationOptions = {
        title: 'Login',
        headerTintColor: "#FAA916", 
        headerStyle: {
            backgroundColor: 'black',
            elevation: null
        }       
    };
    onLoginPress(){
        LoginAPI.loginWithEmail(this.props.screenProps.firebase, this.state.username, this.state.password);
    }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={LoginStyle.container}>
            <View style = {{width: '70%'}}>
                <TextField baseColor={'#FAA916'} tintColor={'#FFFFFF'} label='Username' textColor = {'#FFFFFF'} onChangeText = {(username) => this.setState({username: username})}/>
                <TextField baseColor={'#FAA916'} tintColor={'#FFFFFF'} label='Password' secureTextEntry={true} textColor = {'#FFFFFF'}  onChangeText = {(password) => this.setState({password: password})}/>
                <View style = {{paddingTop: 20}}>
                    <Button style={{backgroundColor: '#FAA916'}} textStyle={{fontSize: 18, color: '#FFFFFF'}} onPress={()=>this.onLoginPress()}>
                        Log In
                    </Button>
                </View>
                <View style = {{paddingTop: 20}}>
                    <Button style={{backgroundColor: '#000000', borderColor: '#FAA916', borderWidth: 2}} textStyle={{fontSize: 18, color: '#FFFFFF'}} onPress={()=>navigate('BarCodeScan')}>
                        Register
                    </Button>
                </View>
            </View>
        </View>
      );
    }
  };