//
//  UserSignupCompletion
//  ThumbsUp UI_Ux
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class UserSignupCompletion extends React.Component {

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

	onInterestedInACompPressed = () => {
		const { navigate } = this.props.navigation
		navigate("CompanySignupCompletion")
	}

	onContinueButtonPressed = () => {
		const { navigate } = this.props.navigation
		navigate("UserHome")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<Text
					style={styles.welcomeToThumbsupText}>Welcome to </Text>
				<Text
					style={styles.aReferralPlatformText}>A referral platform built with clients in mind. </Text>
				<Image
					source={require("./../../assets/images/seperator-3.png")}
					style={styles.seperatorImage}/>
				<Text
					style={styles.nextFillOutTheFText}>Next: </Text>
				<View
					style={styles.nameInputView}>
					<Text
						style={styles.labelText}>Name</Text>
					<View
						style={styles.inputView}>
						<TextInput
							returnKeyType="next"
							autoCorrect={false}
							placeholder="Enter Name"
							style={styles.textTextInput}/>
					</View>
				</View>
				<View
					style={styles.emailInputView}>
					<Text
						style={styles.labelTwoText}>Email Address</Text>
					<View
						style={styles.inputTwoView}>
						<TextInput
							keyboardType="email-address"
							returnKeyType="next"
							autoCorrect={false}
							placeholder="Enter Email Address"
							style={styles.textTwoTextInput}/>
					</View>
				</View>
				<View
					style={styles.phoneNumberInputView}>
					<Text
						style={styles.labelThreeText}>Phone Number</Text>
					<View
						style={styles.inputThreeView}>
						<TextInput
							keyboardType="phone-pad"
							returnKeyType="done"
							autoCorrect={false}
							placeholder="Enter Phone Number"
							style={styles.textThreeTextInput}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={this.onInterestedInACompPressed}
					style={styles.interestedInACompButton}>
					<Text
						style={styles.interestedInACompButtonText}>Interested in a Company account? Tap Here</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.onContinueButtonPressed}
					style={styles.continueButtonButton}>
					<Text
						style={styles.continueButtonButtonText}>Continue</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	welcomeToThumbsupText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.88,
		backgroundColor: "transparent",
		marginTop: 53,
	},
	aReferralPlatformText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.44,
		backgroundColor: "transparent",
		width: 313,
		marginTop: 6,
	},
	seperatorImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 146,
		height: 2,
		marginTop: 21,
	},
	nextFillOutTheFText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.44,
		backgroundColor: "transparent",
		marginTop: 17,
	},
	nameInputView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 74,
		marginLeft: 26,
		marginRight: 23,
		marginTop: 41,
		alignItems: "flex-start",
	},
	labelText: {
		backgroundColor: "transparent",
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.5,
		marginLeft: 1,
	},
	inputView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 50,
		marginTop: 8,
		justifyContent: "center",
	},
	textTextInput: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 19,
		marginLeft: 17,
		marginRight: 17,
	},
	emailInputView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 74,
		marginLeft: 26,
		marginRight: 23,
		marginTop: 16,
		alignItems: "flex-start",
	},
	labelTwoText: {
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 1,
	},
	inputTwoView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 50,
		marginTop: 8,
		justifyContent: "center",
	},
	textTwoTextInput: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 19,
		marginLeft: 17,
		marginRight: 17,
	},
	phoneNumberInputView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 74,
		marginLeft: 26,
		marginRight: 23,
		marginTop: 16,
		alignItems: "flex-start",
	},
	labelThreeText: {
		backgroundColor: "transparent",
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.5,
		marginLeft: 1,
	},
	inputThreeView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 50,
		marginTop: 8,
		justifyContent: "center",
	},
	textThreeTextInput: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 19,
		marginLeft: 17,
		marginRight: 17,
	},
	interestedInACompButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 313,
		height: 18,
		marginBottom: 25,
	},
	interestedInACompButtonText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	interestedInACompButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	continueButtonButtonText: {
		color: "white",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	continueButtonButton: {
		backgroundColor: "rgb(23, 117, 242)",
		borderRadius: 8,
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowRadius: 11,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "stretch",
		height: 56,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 29,
	},
	continueButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
