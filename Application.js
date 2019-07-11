import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class App extends Component {
    state = {
        lotes: {},
        ot: {}
    }
    constructor(props) {
        super(props)
        this.username = this.props.navigation.getParam('logIn', {}).Username
        this.token = this.props.navigation.getParam('logIn', {}).Token
        this.culture = this.props.navigation.getParam('logIn', {}).Culture
        this.ID_Usuario = this.props.navigation.getParam('logIn', {}).ID_Usuario
    }

    onGetAllLotes = async () => {
        const res = await fetch('https://pa-dev01.alboragro.com/apigo/lotes/GetAll',
                                {
                                    method: 'GET',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${this.token}`
                                    }
                                }) 
        this.setState({ lotes: await res.json() })
        console.log(this.state.lotes)
    }

    onGetAllOt = async () => {
        const res = await fetch('https://pa-dev01.alboragro.com/apigo/ordenes_trabajo/GetAll',
                                {
                                    method: 'GET',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${this.token}`
                                    }
                                }) 
        this.setState({ ot: await res.json() })

        console.log(this.state.ot)
    }

    onLogOut = () => {
        this.props.navigation.goBack()
    }

    render() {
        return [
            <View style={styles.container}>
                <Text style={[styles.field, styles.welcome]}>{`Welcome to alborGo! ${this.username}`}</Text>
                <Text style={[styles.field, styles.culture]}>{`you are in ${this.culture}`}</Text>
                <Text style={[styles.field, styles.id]}>{`we'd created an id for you ${this.ID_Usuario}`}</Text>
            
                <TouchableOpacity style={[styles.button, styles.info]} onPress={this.onGetAllLotes}>
                    <Text style={styles.buttonText}>GETALL LOTES</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={[styles.button, styles.info]} onPress={this.onGetAllOt}>
                    <Text style={styles.buttonText}>GETALL OT</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={[styles.button, styles.logOut]} onPress={this.onLogOut}>
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>    
            </View>,
        ]
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        paddingTop: '30%',
        alignContent: 'center',
        flex: 1
    },
    button: {
        height: 50,
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    info: {
        backgroundColor: '#48bbec',
        borderColor: '#48bbec',
    },
    logOut: {
        marginTop: 10,
        backgroundColor: 'red'
    },
    buttonText: {
        alignContent: 'center',
        color: 'white', 
        fontSize: 30,
    },
    field: {
        paddingLeft: 30,
        fontSize: 30,
        color: 'white',
    },
    welcome: {
    },
    token: {

    },
    culture: {

    },
    id: {

    }
})