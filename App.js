import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import LogIn from './LogIn'
import App from './Application'

export default createAppContainer(createStackNavigator({
	LogIn: {
		screen: LogIn,
		navigationOptions: () => ({ header: null })
	},
	App: {
		screen: App,
		navigationOptions: () => ({ header: null })
	}
}))