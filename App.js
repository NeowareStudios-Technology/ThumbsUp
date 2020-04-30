//
//  App.js
//  ThumbsUp UI_Ux
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
import CardInformation from "./App/CardInformation/CardInformation"
import CompanyHome from "./App/CompanyHome/CompanyHome"
import CompanyPreview from "./App/CompanyPreview/CompanyPreview"
import CompanySettings from "./App/CompanySettings/CompanySettings"
import CompanySignupCompletion from "./App/CompanySignupCompletion/CompanySignupCompletion"
import CreationPreview from "./App/CreationPreview/CreationPreview"
import ImageUplaod from "./App/ImageUplaod/ImageUplaod"
import React from "react"
import SendPost from "./App/SendPost/SendPost"
import SignupLogin from "./App/SignupLogin/SignupLogin"
import TemplateSelection from "./App/TemplateSelection/TemplateSelection"
import UserSettings from "./App/UserSettings/UserSettings"
import UserHome from "./App/UserHome/UserHome"
import UserSignupCompletion from "./App/UserSignupCompletion/UserSignupCompletion"
import UserThankYou from "./App/UserThankYou/UserThankYou"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	SignupLogin: {
		screen: SignupLogin,
	},
	CompanySignupCompletion: {
		screen: CompanySignupCompletion,
	},
	CardInformation: {
		screen: CardInformation,
	},
	CompanyHome: {
		screen: CompanyHome,
	},
	TemplateSelection: {
		screen: TemplateSelection,
	},
	ImageUplaod: {
		screen: ImageUplaod,
	},
	CreationPreview: {
		screen: CreationPreview,
	},
	SendPost: {
		screen: SendPost,
	},
	UserThankYou: {
		screen: UserThankYou,
	},
	UserSignupCompletion: {
		screen: UserSignupCompletion,
	},
	UserHome: {
		screen: UserHome,
	},

}, {
	initialRouteName: "SignupLogin",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {

		this.initProjectFonts()
	}

	async initProjectFonts() {

		await Font.loadAsync({
			".AppleSystemUIFont": require("./assets/fonts/SFNS.ttf"),
			"SFProDisplay-Regular": require("./assets/fonts/SFProDisplayRegular.otf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {

		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
