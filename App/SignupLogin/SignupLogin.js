//
//  SignupLogin
//  ThumbsUp UI_Ux
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class SignupLogin extends React.Component {

	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	onContinueButtonTwoPressed = () => {

		const { navigate } = this.props.navigation

		navigate("CompanySignupCompletion")
	}

	onContinueButtonPressed = () => {

	}

	render() {

		return <View
				style={styles.viewView}>
				<Text
					style={styles.optionTextText}>Tap the option that fits you best</Text>
				<TouchableOpacity
					onPress={this.onContinueButtonPressed}
					style={styles.continueButtonTwoButton}>
					<Text
						style={styles.continueButtonTwoButtonText}>I am a User</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.onContinueButtonTwoPressed}
					style={styles.continueButtonButton}>
					<Text
						style={styles.continueButtonButtonText}>I am a Company</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "flex-end",
	},
	optionTextText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.09,
		backgroundColor: "transparent",
		alignSelf: "center",
		marginBottom: 28,
	},
	continueButtonTwoButton: {
		backgroundColor: "rgb(23, 117, 242)",
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 56,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 14,
	},
	continueButtonTwoButtonText: {
		color: "white",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	continueButtonTwoButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	continueButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	continueButtonButton: {
		backgroundColor: "rgb(23, 117, 242)",
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 56,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 29,
	},
	continueButtonButtonText: {
		color: "white",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
