//
//  CompanySignupCompletion
//  ThumbsUp UI_Ux
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class CompanySignupCompletion extends React.Component {

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

	onInterestedInAUserPressed = () => {
		const { navigate } = this.props.navigation
		navigate("UserSignupCompletion")
	}

	onContinueButtonPressed = () => {

		const { navigate } = this.props.navigation

		navigate("CardInformation")
	}

	render() {

		return <View
				style={styles.viewView}>
				<View
					style={styles.viewTwoView}>
					<View
						style={styles.viewFourView}>
						<Text
							style={styles.welcomeToThumbsupText}>Welcome to ThumbsUp</Text>
						<Text
							style={styles.aReferralPlatformText}>A referral platform built with clients in mind. </Text>
						<Image
							source={require("./../../assets/images/path-2-2.png")}
							style={styles.path2Image}/>
						<Text
							style={styles.nextFillOutTheFText}>Next: Fill out the form below and tap continue to complete your account creation.</Text>
					</View>
					<View
						style={styles.viewThreeView}>
						<View
							style={styles.formInputTextView}>
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
							style={styles.formInputTextTwoView}>
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
							style={styles.formInputTextFourView}>
							<Text
								style={styles.labelFourText}>Phone Number</Text>
							<View
								style={styles.inputFourView}>
								<TextInput
									keyboardType="phone-pad"
									returnKeyType="next"
									autoCorrect={false}
									placeholder="Enter Phone Number"
									style={styles.textFourTextInput}/>
							</View>
						</View>
						<View
							style={styles.formInputTextThreeView}>
							<Text
								style={styles.labelThreeText}>Company Name</Text>
							<View
								style={styles.inputThreeView}>
								<TextInput
									returnKeyType="done"
									autoCorrect={false}
									placeholder="Enter Company Name"
									style={styles.textThreeTextInput}/>
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.viewFiveView}>
					<TouchableOpacity
						onPress={this.onInterestedInAUserPressed}
						style={styles.interestedInAUserButton}>
						<Text
							style={styles.interestedInAUserButtonText}>Interested in a User account? Tap Here</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.onContinueButtonPressed}
						style={styles.continueButtonButton}>
						<Text
							style={styles.continueButtonButtonText}>Continue</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	viewTwoView: {
		backgroundColor: "transparent",
		height: 483,
		marginLeft: 23,
		marginRight: 22,
		marginTop: 50,
	},
	viewFourView: {
		backgroundColor: "transparent",
		height: 131,
		marginLeft: 9,
		marginRight: 6,
		alignItems: "center",
	},
	welcomeToThumbsupText: {
		backgroundColor: "transparent",
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.88,
		marginTop: 11,
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
		width: 316,
		marginTop: 7,
	},
	path2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 148,
		height: 4,
		marginTop: 13,
	},
	nextFillOutTheFText: {
		backgroundColor: "transparent",
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.44,
		width: 277,
		marginTop: 11,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		height: 345,
		marginTop: 20,
	},
	formInputTextView: {
		backgroundColor: "transparent",
		height: 77,
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
		marginRight: 4,
		marginTop: 8,
		justifyContent: "center",
	},
	textTextInput: {
		color: "rgb(58, 58, 62)",
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
	formInputTextTwoView: {
		backgroundColor: "transparent",
		height: 77,
		marginTop: 13,
	},
	labelTwoText: {
		backgroundColor: "transparent",
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.5,
		alignSelf: "flex-start",
		marginLeft: 1,
	},
	inputTwoView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		height: 50,
		marginRight: 4,
		marginTop: 8,
		justifyContent: "center",
	},
	textTwoTextInput: {
		color: "rgb(58, 58, 62)",
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
	formInputTextFourView: {
		backgroundColor: "transparent",
		height: 77,
		marginRight: 1,
		marginTop: 13,
		alignItems: "flex-start",
	},
	labelFourText: {
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
	inputFourView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 50,
		marginRight: 3,
		marginTop: 8,
		justifyContent: "center",
	},
	textFourTextInput: {
		color: "rgb(58, 58, 62)",
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
	formInputTextThreeView: {
		backgroundColor: "transparent",
		height: 77,
		marginTop: 11,
		alignItems: "flex-start",
	},
	labelThreeText: {
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
	inputThreeView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 50,
		marginRight: 4,
		marginTop: 8,
		justifyContent: "center",
	},
	textThreeTextInput: {
		color: "rgb(58, 58, 62)",
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
	viewFiveView: {
		backgroundColor: "transparent",
		height: 100,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 28,
		justifyContent: "flex-end",
	},
	interestedInAUserButtonText: {
		color: "rgb(78, 78, 86)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	interestedInAUserButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "center",
		width: 313,
		height: 18,
		marginBottom: 16,
	},
	interestedInAUserButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	continueButtonButtonText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
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
	},
})
