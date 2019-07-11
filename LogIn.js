import React, { Component } from 'react'
import {
    TextInput, 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import store, { CHECK_CREDENTIAL } from './ReduxCheck'

export default class LogIn extends Component {
    state = async () => await store.getState()

    constructor(props) {
        super(props)
        store.subscribe(async () => this.setState(await store.getState()))
    }
    onChangeUser = input => this.username = input
    onChangePass = input => this.password = input
    
    onLogIn = async () => {
        store.dispatch({
            type: CHECK_CREDENTIAL,
            username: this.username,
            password: this.password,
            IMEI: '1234'
        })

        if(await this.state.Token === '') 
            return

        this.props.navigation.navigate('App', {logIn: this.state})
    }

    render() {
        return (
            <View
                style={styles.container}
            > 
            <Image
                style={styles.image}
                source={{uri: 'https://alboragro.com/alborgo/img/logo/logo-3.png'}}
            />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Username'
                    onChangeText={this.onChangeUser}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Password'
                    onChangeText={this.onChangePass}
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                    style={[styles.button, styles.logIn]}
                    onPress={this.onLogIn}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        paddingTop: '30%',
        alignContent: 'center',
        flex: 1
    },
    inputBox: {
        margin: 10,
        paddingLeft: 20,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 50,
        fontSize: 20
    },
    button: {
        height: 50,
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    logIn: {
        backgroundColor: '#48bbec',
        borderColor: '#48bbec',
    },
    buttonText: {
        alignContent: 'center',
        color: 'white', 
        fontSize: 30,
    },
    image: {
        width: 283, height: 128,
        justifyContent: 'center',
        marginLeft: 30,
    }
})