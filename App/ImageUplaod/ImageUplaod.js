//
//  ImageUplaod
//  ThumbsUp UI_Ux
//
//  Created by .
//  Copyright © 2018 . All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class ImageUplaod extends React.Component {

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

	onGroup5ThreePressed = () => {

	}

	onGroup5Pressed = () => {

	}

	onViewPressed = () => {

	}

	onGroup5TwoPressed = () => {

	}

	onContinueButtonPressed = () => {

		const { navigate } = this.props.navigation

		navigate("CreationPreview")
	}

	render() {

		return <View
				style={styles.viewView}>
				<View
					style={styles.viewTwoView}>
					<View
						style={styles.viewThreeView}>
						<Text
							style={styles.tapOneOfThe4SloText}>Tap one of the 4 slots below to add new or previously taken photos to your post.     </Text>
						<Image
							source={require("./../../assets/images/path-2-2.png")}
							style={styles.path2Image}/>
						<Text
							style={styles.noteInOrderToEnText}>Note: In order to ensure a quality post, make sure to select images that best represent your work </Text>
					</View>
					<View
						style={styles.viewFourView}>
						<View
							pointerEvents="box-none"
							style={{
								height: 145,
								marginRight: 6,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<TouchableOpacity
								onPress={this.onGroup5Pressed}
								style={styles.group5TwoButton}>
								<Image
									source={require("./../../assets/images/upload.png")}
									style={styles.group5TwoButtonImage}/>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onGroup5TwoPressed}
								style={styles.group5ThreeButton}>
								<Image
									source={require("./../../assets/images/upload.png")}
									style={styles.group5ThreeButtonImage}/>
							</TouchableOpacity>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 145,
								marginRight: 6,
								marginBottom: 7,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<TouchableOpacity
								onPress={this.onGroup5ThreePressed}
								style={styles.group5Button}>
								<Image
									source={require("./../../assets/images/upload.png")}
									style={styles.group5ButtonImage}/>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onViewPressed}
								style={styles.viewButton}>
								<Image
									source={require("./../../assets/images/upload.png")}
									style={styles.viewButtonImage}/>
							</TouchableOpacity>
						</View>
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
	viewTwoView: {
		backgroundColor: "transparent",
		width: 335,
		height: 440,
		alignItems: "center",
		top: 80,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		width: 324,
		height: 107,
		alignItems: "center",
	},
	tapOneOfThe4SloText: {
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		width: 329,
		marginTop: 5,
	},
	path2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 147,
		height: 4,
		marginTop: 10,
	},
	noteInOrderToEnText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.44,
		backgroundColor: "transparent",
		width: 307,
		marginTop: 7,
	},
	viewFourView: {
		backgroundColor: "transparent",
		width: 308,
		height: 309,
		marginTop: 24,
	},
	group5TwoButton: {
		backgroundColor: "rgb(244, 244, 246)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 145,
		height: 145,
	},
	group5TwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group5TwoButtonImage: {
		resizeMode: "contain",
	},
	group5ThreeButtonImage: {
		resizeMode: "contain",
	},
	group5ThreeButton: {
		backgroundColor: "rgb(244, 244, 246)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 145,
		height: 145,
	},
	group5ThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group5Button: {
		backgroundColor: "rgb(244, 244, 246)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 145,
		height: 145,
	},
	group5ButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group5ButtonImage: {
		resizeMode: "contain",
	},
	viewButton: {
		backgroundColor: "rgb(244, 244, 246)",
		borderRadius: 7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 145,
		height: 145,
	},
	viewButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	viewButtonImage: {
		resizeMode: "contain",
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
		alignSelf: "stretch",
		height: 56,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 28,
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
