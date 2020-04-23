//
//  CompanyHome
//  ThumbsUp UI_Ux
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class CompanyHome extends React.Component {

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

	onCreateNewTemplatePressed = () => {

		const { navigate } = this.props.navigation

		navigate("TemplateSelection")
	}

	render() {

		return <View
				style={styles.viewView}>
				<ScrollView
					horizontal={true}
					style={styles.viewScrollView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: -1,
							right: 0,
							top: 38,
							height: 656,
						}}>
						<View
							style={styles.previewComponentBuView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/image-preview.png")}
									style={styles.imagePreviewImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
								}}>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorTwoImage}/>
								<Text
									style={styles.clientNameText}>Bill Reidy</Text>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										marginLeft: 141,
										marginRight: 22,
										marginTop: 4,
										marginBottom: 5,
										flexDirection: "row",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "flex-start",
											width: 151,
											height: 40,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.templateNameText}>Amazing Job Template</Text>
										<Text
											style={styles.dateSentText}>27 Mar 2020</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/thumbsup-indicator.png")}
										style={styles.thumbsupIndicatorImage}/>
								</View>
								<Text
									style={styles.pendingText}>Pending </Text>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorImage}/>
							</View>
						</View>
						<View
							style={styles.previewComponentBuTwoView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/image-preview.png")}
									style={styles.imagePreviewTwoImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 1,
									top: 0,
									bottom: 1,
								}}>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorFourImage}/>
								<Text
									style={styles.clientNameTwoText}>Bill Reidy</Text>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										marginLeft: 141,
										marginRight: 22,
										marginTop: 4,
										marginBottom: 5,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 151,
											height: 40,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.templateNameTwoText}>Amazing Job Template</Text>
										<Text
											style={styles.dateSentTwoText}>27 Mar 2020</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/thumbsup-indicator.png")}
										style={styles.thumbsupIndicatorTwoImage}/>
								</View>
								<Text
									style={styles.pendingTwoText}>Pending </Text>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorThreeImage}/>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: -1,
							right: 0,
							top: 169,
							height: 656,
						}}>
						<View
							style={styles.previewComponentBuSixView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/image-preview.png")}
									style={styles.imagePreviewSixImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
								}}>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorTwelveImage}/>
								<Text
									style={styles.clientNameSixText}>Bill Reidy</Text>
								<View
									pointerEvents="box-none"
									style={{
										height: 40,
										marginLeft: 141,
										marginRight: 22,
										marginTop: 4,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 151,
											height: 40,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.templateNameSixText}>Amazing Job Template</Text>
										<Text
											style={styles.dateSentSixText}>27 Mar 2020</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/thumbsup-indicator.png")}
										style={styles.thumbsupIndicatorSixImage}/>
								</View>
								<Text
									style={styles.pendingSixText}>Pending </Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/seperator-2.png")}
									style={styles.seperatorElevenImage}/>
							</View>
						</View>
						<View
							style={styles.previewComponentBuThreeView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/image-preview.png")}
									style={styles.imagePreviewThreeImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 1,
									top: 0,
									bottom: 1,
								}}>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorSixImage}/>
								<Text
									style={styles.clientNameThreeText}>Bill Reidy</Text>
								<View
									pointerEvents="box-none"
									style={{
										height: 40,
										marginLeft: 141,
										marginRight: 22,
										marginTop: 4,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 151,
											height: 40,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.templateNameThreeText}>Amazing Job Template</Text>
										<Text
											style={styles.dateSentThreeText}>27 Mar 2020</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/thumbsup-indicator.png")}
										style={styles.thumbsupIndicatorThreeImage}/>
								</View>
								<Text
									style={styles.pendingThreeText}>Pending </Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/seperator-2.png")}
									style={styles.seperatorFiveImage}/>
							</View>
						</View>
					</View>
					<View
						style={styles.previewComponentBuFourView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/image-preview.png")}
								style={styles.imagePreviewFourImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 1,
								top: 0,
								bottom: 2,
							}}>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorEightImage}/>
							<Text
								style={styles.clientNameFourText}>Bill Reidy</Text>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									marginLeft: 141,
									marginRight: 22,
									marginTop: 4,
									marginBottom: 5,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 151,
										height: 40,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.templateNameFourText}>Amazing Job Template</Text>
									<Text
										style={styles.dateSentFourText}>27 Mar 2020</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/thumbsup-indicator.png")}
									style={styles.thumbsupIndicatorFourImage}/>
							</View>
							<Text
								style={styles.pendingFourText}>Pending </Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorSevenImage}/>
						</View>
					</View>
					<View
						style={styles.previewComponentBuFiveView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/image-preview.png")}
								style={styles.imagePreviewFiveImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 1,
								top: 0,
								bottom: 2,
							}}>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorTenImage}/>
							<Text
								style={styles.clientNameFiveText}>Bill Reidy</Text>
							<View
								pointerEvents="box-none"
								style={{
									height: 40,
									marginLeft: 141,
									marginRight: 22,
									marginTop: 4,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 151,
										height: 40,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.templateNameFiveText}>Amazing Job Template</Text>
									<Text
										style={styles.dateSentFiveText}>27 Mar 2020</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/thumbsup-indicator.png")}
									style={styles.thumbsupIndicatorFiveImage}/>
							</View>
							<Text
								style={styles.pendingFiveText}>Pending </Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/seperator-2.png")}
								style={styles.seperatorNineImage}/>
						</View>
					</View>
					<View
						style={styles.previewComponentBuSevenView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/image-preview.png")}
								style={styles.imagePreviewSevenImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 1,
							}}>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorFourteenImage}/>
							<Text
								style={styles.clientNameSevenText}>Bill Reidy</Text>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									marginLeft: 141,
									marginRight: 22,
									marginTop: 4,
									marginBottom: 5,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 151,
										height: 40,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.templateNameSevenText}>Amazing Job Template</Text>
									<Text
										style={styles.dateSentSevenText}>27 Mar 2020</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/thumbsup-indicator.png")}
									style={styles.thumbsupIndicatorSevenImage}/>
							</View>
							<Text
								style={styles.pendingSevenText}>Pending </Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorThirteenImage}/>
						</View>
					</View>
					<View
						style={styles.previewComponentBuEightView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/image-preview.png")}
								style={styles.imagePreviewEightImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 1,
							}}>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorSixteenImage}/>
							<Text
								style={styles.clientNameEightText}>Bill Reidy</Text>
							<View
								pointerEvents="box-none"
								style={{
									height: 40,
									marginLeft: 141,
									marginRight: 22,
									marginTop: 4,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 151,
										height: 40,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.templateNameEightText}>Amazing Job Template</Text>
									<Text
										style={styles.dateSentEightText}>27 Mar 2020</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/thumbsup-indicator.png")}
									style={styles.thumbsupIndicatorEightImage}/>
							</View>
							<Text
								style={styles.pendingEightText}>Pending </Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/seperator-2.png")}
								style={styles.seperatorFifteenImage}/>
						</View>
					</View>
				</ScrollView>
				<TouchableOpacity
					onPress={this.onCreateNewTemplatePressed}
					style={styles.createNewTemplateButton}>
					<Image
						source={require("./../../assets/images/icon.png")}
						style={styles.createNewTemplateButtonImage}/>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	viewScrollView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: -1,
		right: 0,
		top: 44,
		bottom: -2,
	},
	previewComponentBuView: {
		backgroundColor: "transparent",
		height: 133,
		marginLeft: 1,
	},
	imagePreviewImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 110,
		height: 110,
		marginLeft: 21,
	},
	seperatorTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	clientNameText: {
		color: "rgb(53, 65, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 19,
	},
	templateNameText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	dateSentText: {
		backgroundColor: "transparent",
		color: "rgb(119, 137, 181)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		marginTop: 6,
	},
	thumbsupIndicatorImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		height: null,
		width: 25,
		marginTop: 6,
		marginBottom: 9,
	},
	pendingText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 5,
	},
	seperatorImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	previewComponentBuTwoView: {
		backgroundColor: "transparent",
		height: 134,
		marginTop: 389,
	},
	imagePreviewTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 110,
		height: 110,
		marginLeft: 21,
	},
	seperatorFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	clientNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(53, 65, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 19,
	},
	templateNameTwoText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	dateSentTwoText: {
		color: "rgb(119, 137, 181)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		marginTop: 6,
	},
	thumbsupIndicatorTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: null,
		width: 25,
		marginTop: 6,
		marginBottom: 9,
	},
	pendingTwoText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 5,
	},
	seperatorThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	previewComponentBuSixView: {
		backgroundColor: "transparent",
		height: 133,
		marginLeft: 1,
	},
	imagePreviewSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 110,
		height: 110,
		marginLeft: 21,
	},
	seperatorTwelveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	clientNameSixText: {
		backgroundColor: "transparent",
		color: "rgb(53, 65, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 19,
	},
	templateNameSixText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	dateSentSixText: {
		color: "rgb(119, 137, 181)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		marginTop: 6,
	},
	thumbsupIndicatorSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 25,
		height: 25,
		marginTop: 6,
	},
	pendingSixText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 5,
	},
	seperatorElevenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	previewComponentBuThreeView: {
		backgroundColor: "transparent",
		height: 134,
		marginTop: 389,
	},
	imagePreviewThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 110,
		height: 110,
		marginLeft: 21,
	},
	seperatorSixImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	clientNameThreeText: {
		color: "rgb(53, 65, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 19,
	},
	templateNameThreeText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	dateSentThreeText: {
		backgroundColor: "transparent",
		color: "rgb(119, 137, 181)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		marginTop: 6,
	},
	thumbsupIndicatorThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 25,
		height: 25,
		marginTop: 6,
	},
	pendingThreeText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 5,
	},
	seperatorFiveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	previewComponentBuFourView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: -1,
		right: 0,
		top: 821,
		height: 135,
	},
	imagePreviewFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 110,
		height: 110,
		marginLeft: 21,
	},
	seperatorEightImage: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "cover",
		width: null,
		height: 2,
	},
	clientNameFourText: {
		color: "rgb(53, 65, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 19,
	},
	templateNameFourText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	dateSentFourText: {
		color: "rgb(119, 137, 181)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		marginTop: 6,
	},
	thumbsupIndicatorFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		height: null,
		width: 25,
		marginTop: 6,
		marginBottom: 9,
	},
	pendingFourText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 5,
	},
	seperatorSevenImage: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "cover",
		width: null,
		height: 2,
	},
	previewComponentBuFiveView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: -1,
		right: 0,
		top: 952,
		height: 135,
	},
	imagePreviewFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 110,
		height: 110,
		marginLeft: 21,
	},
	seperatorTenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	clientNameFiveText: {
		color: "rgb(53, 65, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 19,
	},
	templateNameFiveText: {
		backgroundColor: "transparent",
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
	},
	dateSentFiveText: {
		backgroundColor: "transparent",
		color: "rgb(119, 137, 181)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		marginTop: 6,
	},
	thumbsupIndicatorFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 25,
		height: 25,
		marginTop: 6,
	},
	pendingFiveText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 5,
	},
	seperatorNineImage: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "cover",
		width: null,
		height: 2,
	},
	previewComponentBuSevenView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 299,
		height: 134,
	},
	imagePreviewSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 110,
		height: 110,
		marginLeft: 21,
	},
	seperatorFourteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	clientNameSevenText: {
		color: "rgb(53, 65, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 19,
	},
	templateNameSevenText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	dateSentSevenText: {
		backgroundColor: "transparent",
		color: "rgb(119, 137, 181)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		marginTop: 6,
	},
	thumbsupIndicatorSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		height: null,
		width: 25,
		marginTop: 6,
		marginBottom: 9,
	},
	pendingSevenText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 5,
	},
	seperatorThirteenImage: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "cover",
		width: null,
		height: 2,
	},
	previewComponentBuEightView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 430,
		height: 134,
	},
	imagePreviewEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 110,
		height: 110,
		marginLeft: 21,
	},
	seperatorSixteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: null,
		height: 2,
	},
	clientNameEightText: {
		color: "rgb(53, 65, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 19,
	},
	templateNameEightText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	dateSentEightText: {
		backgroundColor: "transparent",
		color: "rgb(119, 137, 181)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		marginTop: 6,
	},
	thumbsupIndicatorEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 25,
		height: 25,
		marginTop: 6,
	},
	pendingEightText: {
		color: "rgb(0, 122, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 141,
		marginTop: 5,
	},
	seperatorFifteenImage: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "cover",
		width: null,
		height: 2,
	},
	createNewTemplateButton: {
		backgroundColor: "rgb(23, 117, 242)",
		borderRadius: 33.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		alignSelf: "center",
		width: 67,
		bottom: 31,
		height: 67,
	},
	createNewTemplateButtonImage: {
		resizeMode: "contain",
	},
	createNewTemplateButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
})
