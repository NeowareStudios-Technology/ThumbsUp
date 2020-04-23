//
//  SendPost
//  ThumbsUp UI_Ux
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class SendPost extends React.Component {

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

		navigate("UserThankYou")
	}

	render() {

		return <View
				style={styles.viewView}>
				<Text
					style={styles.inputTheClientsPhText}>Input the clients phone number. If your client does not have the app they will be re-directed to download.</Text>
				<View
					style={styles.formInputIconView}>
					<Image
						source={require("./../../assets/images/icon-2.png")}
						style={styles.iconImage}/>
					<TextInput
						keyboardType="phone-pad"
						returnKeyType="done"
						autoCorrect={false}
						placeholder="Clients Phone Number "
						style={styles.textTextInput}/>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={this.onContinueButtonPressed}
					style={styles.continueButtonButton}>
					<Text
						style={styles.continueButtonButtonText}>Send</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	inputTheClientsPhText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 24,
		marginRight: 24,
		marginTop: 125,
	},
	formInputIconView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		height: 48,
		marginTop: 40,
		marginLeft: 24,
		marginRight: 22,
		flexDirection: "row",
		alignItems: "center",
	},
	iconImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginLeft: 9,
	},
	textTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		height: 19,
		marginLeft: 4,
		marginRight: 17,
	},
	continueButtonButtonText: {
		color: "white",
		fontFamily: "SFProDisplay-Regular",
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
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 28,
	},
})
