//
//  TemplateSelection
//  ThumbsUp UI_Ux
//
//  Created by .
//  Copyright © 2018 . All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View,BackHandler  } from "react-native"


export default class TemplateSelection extends React.Component {

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


	onContinueButtonPressed = () => {

		const { navigate } = this.props.navigation

		navigate("ImageUplaod")
	}

	onTemplate3Pressed = () => {
		const { navigate } = this.props.navigation
		navigate("ImageUplaod")
	}

	onTemplate2Pressed = () => {
		const { navigate } = this.props.navigation
		navigate("ImageUplaod")
	}

	onTemplate1Pressed = () => {
		const { navigate } = this.props.navigation
  		navigate("ImageUplaod")
	}

	render() {

		return <View
				style={styles.viewView}>
				<Text
					style={styles.selectATemplateToText}>Select a template to create your post.</Text>
				<TouchableOpacity
					onPress={this.onTemplate1Pressed}
					style={styles.template1Button}>
					<Text
						style={styles.template1ButtonText}>Thank You Template{"\n"}Expresses thankfulness of client</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.onTemplate2Pressed}
					style={styles.template2Button}>
					<Text
						style={styles.template2ButtonText}>Amazing Job Template{"\n"}Expresses quality of work</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.onTemplate3Pressed}
					style={styles.template3Button}>
					<Text
						style={styles.template3ButtonText}>Speed Template{"\n"}Expresses speediness of work</Text>
				</TouchableOpacity>
				<View
					style={{
						flex: 1,
					}}/>
				{/*<TouchableOpacity
					onPress={this.onContinueButtonPressed}
					style={styles.continueButtonButton}>
					<Text
						style={styles.continueButtonButtonText}>Continue</Text>
				</TouchableOpacity>*/}
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	selectATemplateToText: {
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 15,
		marginRight: 16,
		marginTop: 126,
	},
	template1Button: {
		backgroundColor: "rgb(244, 244, 246)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 88,
		marginLeft: 23,
		marginRight: 23,
		marginTop: 27,
	},
	template1ButtonText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	template1ButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	template2Button: {
		backgroundColor: "rgb(244, 244, 246)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 88,
		marginLeft: 23,
		marginRight: 23,
		marginTop: 10,
	},
	template2ButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	template2ButtonText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	template3Button: {
		backgroundColor: "rgb(244, 244, 246)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 88,
		marginLeft: 24,
		marginRight: 22,
		marginTop: 10,
	},
	template3ButtonText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	template3ButtonImage: {
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
