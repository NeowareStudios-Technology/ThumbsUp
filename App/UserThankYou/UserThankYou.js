//
//  UserThankYou
//  ThumbsUp UI_Ux
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class UserThankYou extends React.Component {

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
				<View
					style={styles.thumbsupConfirmView}/>
				<Text
					style={styles.thankYouText}>Thank You</Text>
				<Text
					style={styles.yourPostIsOnItsText}>Your post is on its way to your feed. Tap ‘Complete’ to return to your homescreen.</Text>
				<View
					style={{
						flex: 1,
					}}/>
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
	},
	thumbsupConfirmView: {
		backgroundColor: "rgb(23, 117, 242)",
		borderRadius: 88,
		alignSelf: "center",
		width: 178,
		height: 178,
		marginTop: 107,
	},
	thankYouText: {
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 36,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 63,
		marginRight: 63,
		marginTop: 27,
	},
	yourPostIsOnItsText: {
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		height: 32,
		marginLeft: 42,
		marginRight: 42,
		marginTop: 10,
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
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
