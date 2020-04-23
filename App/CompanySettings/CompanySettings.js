//
//  CompanySettings
//  ThumbsUp UI_Ux
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class CompanySettings extends React.Component {

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

		navigate("SignupLogin")
	}

	render() {

		return <View
				style={styles.viewView}>
				<View
					style={styles.group7View}>
					<Image
						source={require("./../../assets/images/ellipse.png")}
						style={styles.ellipseImage}/>
					<Text
						style={styles.sectionHeaderText}>General</Text>
					<View
						style={styles.listRowTextView}>
						<Text
							style={styles.labelText}>Name</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.sublabelText}>Jim Nelson</Text>
					</View>
					<View
						style={styles.listRowTextFourView}>
						<Text
							style={styles.labelFourText}>Email Address</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.sublabelFourText}>Info@TilesandFloors.com</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.listRowTextTwoView}>
						<Text
							style={styles.labelTwoText}>Phone Number</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.sublabelTwoText}>(123) 456-7890</Text>
					</View>
					<View
						style={styles.listRowTextThreeView}>
						<Text
							style={styles.labelThreeText}>Company Name</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.sublabelThreeText}>Tile & Flooring Emporium</Text>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={this.onContinueButtonPressed}
					style={styles.continueButtonButton}>
					<Text
						style={styles.continueButtonButtonText}>Sign Out</Text>
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
	group7View: {
		backgroundColor: "transparent",
		width: 376,
		height: 503,
		marginTop: 56,
	},
	ellipseImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 128,
		height: 128,
	},
	sectionHeaderText: {
		backgroundColor: "transparent",
		color: "rgb(23, 117, 242)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		marginLeft: 17,
		marginRight: 13,
		marginTop: 40,
	},
	listRowTextView: {
		backgroundColor: "white",
		height: 64,
		marginLeft: 1,
		marginTop: 13,
	},
	labelText: {
		backgroundColor: "transparent",
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		marginLeft: 19,
		marginRight: 18,
		marginTop: 11,
	},
	sublabelText: {
		backgroundColor: "transparent",
		color: "rgb(171, 171, 182)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		marginLeft: 19,
		marginRight: 18,
		marginBottom: 5,
	},
	listRowTextFourView: {
		backgroundColor: "white",
		height: 64,
		marginLeft: 1,
		marginTop: 10,
	},
	labelFourText: {
		backgroundColor: "transparent",
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		marginLeft: 19,
		marginRight: 18,
		marginTop: 11,
	},
	sublabelFourText: {
		backgroundColor: "transparent",
		color: "rgb(171, 171, 182)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		marginLeft: 19,
		marginRight: 18,
		marginBottom: 5,
	},
	listRowTextTwoView: {
		backgroundColor: "white",
		height: 64,
		marginLeft: 1,
		marginBottom: 16,
	},
	labelTwoText: {
		backgroundColor: "transparent",
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		marginLeft: 19,
		marginRight: 18,
		marginTop: 11,
	},
	sublabelTwoText: {
		color: "rgb(171, 171, 182)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 19,
		marginRight: 18,
		marginBottom: 5,
	},
	listRowTextThreeView: {
		backgroundColor: "white",
		height: 64,
		marginRight: 1,
	},
	labelThreeText: {
		backgroundColor: "transparent",
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		marginLeft: 19,
		marginRight: 18,
		marginTop: 11,
	},
	sublabelThreeText: {
		backgroundColor: "transparent",
		color: "rgb(171, 171, 182)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		marginLeft: 19,
		marginRight: 18,
		marginBottom: 5,
	},
	continueButtonButton: {
		backgroundColor: "rgb(23, 117, 242)",
		borderRadius: 8,
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
})
