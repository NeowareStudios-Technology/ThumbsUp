//
//  CardInformation
//  ThumbsUp UI_Ux
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class CardInformation extends React.Component {

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

	onContinueButtonPressed = () => {

		const { navigate } = this.props.navigation

		navigate("CompanyHome")
	}

	render() {

		return <View
				style={styles.viewView}>
				<Text
					style={styles.welcomeToThumbsupText}>Welcome to ThumbsUp</Text>
				<Text
					style={styles.aReferralPlatformText}>A referral platform built with clients in mind. </Text>
				<Image
					source={require("./../../assets/images/path-2-2.png")}
					style={styles.path2Image}/>
				<Text
					style={styles.nextFillOutYourText}>Next: Fill out your card information below to subscribe to the ThumbsUp company program. </Text>
				<View
					style={styles.formInputTextView}>
					<Text
						style={styles.labelText}>Card Number</Text>
					<View
						style={styles.inputView}>
						<TextInput
							keyboardType="number-pad"
							returnKeyType="next"
							autoCorrect={false}
							placeholder="Enter Card Number"
							style={styles.textTextInput}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 75,
						marginLeft: 15,
						marginRight: 14,
						marginTop: 7,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						style={styles.formInputTextTwoView}>
						<Text
							style={styles.labelTwoText}>Expiration</Text>
						<View
							style={styles.inputTwoView}>
							<TextInput
								keyboardType="number-pad"
								returnKeyType="next"
								autoCorrect={false}
								placeholder="Year"
								style={styles.textTwoTextInput}/>
						</View>
					</View>
					<View
						style={styles.formInputTextThreeView}>
						<Text
							style={styles.labelThreeText}> </Text>
						<View
							style={styles.inputThreeView}>
							<TextInput
								returnKeyType="next"
								autoCorrect={false}
								placeholder="Month"
								style={styles.textThreeTextInput}/>
						</View>
					</View>
					<View
						style={styles.formInputTextFourView}>
						<Text
							style={styles.labelFourText}>CVC</Text>
						<View
							style={styles.inputFourView}>
							<TextInput
								keyboardType="number-pad"
								returnKeyType="next"
								autoCorrect={false}
								placeholder="CVC"
								style={styles.textFourTextInput}/>
						</View>
					</View>
				</View>
				<View
					style={styles.formInputTextFiveView}>
					<Text
						style={styles.labelFiveText}>Cardholder Name</Text>
					<View
						style={styles.inputFiveView}>
						<TextInput
							returnKeyType="done"
							autoCorrect={false}
							placeholder="Enter Cardholder Name"
							style={styles.textFiveTextInput}/>
					</View>
				</View>
				<Text
					style={styles.total1499MonthText}>Total:</Text>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={this.onContinueButtonPressed}
					style={styles.continueButtonButton}>
					<Text
						style={styles.continueButtonButtonText}>Subscribe Now</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
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
		alignSelf: "center",
		marginTop: 53,
	},
	aReferralPlatformText: {
		backgroundColor: "transparent",
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.44,
		alignSelf: "center",
		width: 313,
		marginTop: 7,
	},
	path2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 146,
		height: 2,
		marginTop: 22,
	},
	nextFillOutYourText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.44,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 292,
		marginTop: 16
	},
	formInputTextView: {
		backgroundColor: "transparent",
		height: 75,
		marginLeft: 15,
		marginRight: 14,
		marginTop: 22,
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
		marginRight: 1,
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
		padding: 10,
		width: 311,
		height: 18,
	},
	formInputTextTwoView: {
		backgroundColor: "transparent",
		width: 107,
		height: 75,
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
		marginRight: 1,
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
		padding: 10,
		width: 72,
		height: 18,
	},
	formInputTextThreeView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 75,
		marginLeft: 2,
		marginRight: 2,
	},
	labelThreeText: {
		backgroundColor: "transparent",
		color: "rgb(58, 58, 62)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.5,
		alignSelf: "flex-start",
		marginLeft: 1,
	},
	inputThreeView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		height: 50,
		marginRight: 1,
		marginTop: 7,
		justifyContent: "center",
	},
	textThreeTextInput: {
		backgroundColor: "transparent",
		padding: 10,
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 120,
		height: 18,
	},
	formInputTextFourView: {
		backgroundColor: "transparent",
		width: 81,
		height: 75,
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
		alignSelf: "flex-start",
		marginLeft: 1,
	},
	inputFourView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		height: 50,
		marginRight: 1,
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
		padding: 10,
		width: 46,
		height: 18,
	},
	formInputTextFiveView: {
		backgroundColor: "transparent",
		height: 75,
		marginLeft: 15,
		marginRight: 14,
		marginTop: 9,
		alignItems: "flex-start",
	},
	labelFiveText: {
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
	inputFiveView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 50,
		marginRight: 1,
		marginTop: 8,
		justifyContent: "center",
	},
	textFiveTextInput: {
		backgroundColor: "transparent",
		padding: 10,
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 311,
		height: 18,
	},
	total1499MonthText: {
		backgroundColor: "transparent",
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.3,
		alignSelf: "flex-end",
		marginRight: 16,
		marginTop: 16,
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
		marginBottom: 28,
	},
	continueButtonButtonImage: {
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
})
