import React from 'react'
import { createStore } from 'redux'

let defaultState = {
    ID_Usuario: null,
    Username: '',
    Token: '',
    Culture: ''    
}

export const CHECK_CREDENTIAL = 'CHECK_CREDENTIAL'

export default createStore(async (state = defaultState, action = CHECK_CREDENTIAL) => {
    switch(action.type) {
    case CHECK_CREDENTIAL: {
        console.log(`Username: ${action.username}, Password: ${action.password}, IMEI: ${action.IMEI}`)
        const body = JSON.stringify({
            "Username": action.username,
            "password": action.password,
            "IMEI": action.IMEI  
        })
        const res = await fetch('https://pa-dev01.alboragro.com/apigo/login/authenticate',
                            {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body
                            })
        const json = await res.json()
        const newState = {
            ID_Usuario: json.ID_Usuario,
            Username: json.Username,
            Token: json.Token,
            Culture: json.Culture  
        }
        return newState
    }
    break 
    
    default:
        return state
    }
}) 