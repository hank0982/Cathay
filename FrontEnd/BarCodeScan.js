import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { StackNavigator } from 'react-navigation';

export default class BarCodeScan extends Component {
    state = {
        hasCameraPermission: null
    };
    static navigationOptions = {
        title: 'BarcodeScanner',
        headerTintColor: "#FAA916",
        headerStyle: {
            backgroundColor: 'black',
            elevation: null
        }
    };
    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async() => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = data => {
        if (data)
            Alert.alert(
                'Scan successful!',
                JSON.stringify(data)
            );
    };

    render() {
        return ( <View style = { styles.container } > {
                this.state.hasCameraPermission === null ? 
                <Text> Requesting for camera permission </Text> :
                this.state.hasCameraPermission === false ?
                <Text> Camera permission is not granted </Text> : 
               <BarCodeScanner
                onBarCodeRead = { this._handleBarCodeRead }
                style = {
                    { height: 400, width: 400 } }
                />
            } 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000000',
    }
});