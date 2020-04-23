//
//  CreationPreview
//  ThumbsUp UI_Ux
//
//  Created by .
//  Copyright © 2018 . All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class CreationPreview extends React.Component {

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

		navigate("SendPost")
	}

	render() {

		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 541,
						marginLeft: 14,
						marginRight: 16,
						marginTop: 55,
					}}>
					<View
						style={styles.viewTwoView}>
						<Text
							style={styles.reviewTheTemplateText}>Review the template post. Tap continue to send the post to your client.</Text>
						<Image
							source={require("./../../assets/images/path-2-2.png")}
							style={styles.path2Image}/>
					</View>
					<View
						style={styles.viewThreeView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/base.png")}
								style={styles.baseImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.viewFourView}>
								<View
									style={styles.elementsHeaderPhonView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Image
											source={require("./../../assets/images/rectangle-2.png")}
											style={styles.rectangleImage}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 12,
											right: 11,
											top: 14,
											height: 98,
										}}>
										<View
											pointerEvents="box-none"
											style={{
												height: 40,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<Image
												source={require("./../../assets/images/elements-profile-picture.png")}
												style={styles.elementsProfilePicImage}/>
											<View
												pointerEvents="box-none"
												style={{
													width: 72,
													height: 32,
													marginLeft: 8,
													marginTop: 5,
													alignItems: "flex-start",
												}}>
												<Text
													style={styles.profileNameText}>Client Name</Text>
												<View
													pointerEvents="box-none"
													style={{
														width: 61,
														height: 14,
														marginTop: 2,
														flexDirection: "row",
														alignItems: "flex-start",
													}}>
													<Text
														style={styles.timeLocationText}>Just now</Text>
													<Image
														source={require("./../../assets/images/icons-ic-globe-dark.png")}
														style={styles.iconsIcGlobeDarkImage}/>
												</View>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/icons-ic-more.png")}
												style={styles.iconsIcMoreImage}/>
										</View>
										<Text
											style={styles.postText}>This looks great! Check out the amazing job the team
at Tile and Flooring Emporium were able to do for
us. We are more than satisfied with our results!</Text>
									</View>
									<Image
										source={require("./../../assets/images/ellipse-3.png")}
										style={styles.ellipseImage}/>
									<Image
										source={require("./../../assets/images/shape.png")}
										style={styles.shapeImage}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 317,
									}}>
									<View
										style={styles.elementsShortInterView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 1,
												top: 10,
												bottom: 0,
											}}>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													right: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Image
													source={require("./../../assets/images/bounds.png")}
													style={styles.boundsImage}/>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 14,
													right: 22,
													top: 9,
													bottom: 13,
													alignItems: "flex-start",
												}}>
												<View
													pointerEvents="box-none"
													style={{
														width: 85,
														height: 17,
														flexDirection: "row",
														alignItems: "flex-start",
													}}>
													<Image
														source={require("./../../assets/images/icons-ic-like-bubble.png")}
														style={styles.iconsIcLikeBubbleImage}/>
													<Text
														style={styles.friendsText}>Thumbs Up</Text>
												</View>
												<View
													style={{
														flex: 1,
													}}/>
												<View
													pointerEvents="box-none"
													style={{
														alignSelf: "stretch",
														height: 20,
														flexDirection: "row",
														alignItems: "flex-end",
													}}>
													<View
														style={styles.viewSevenView}>
														<Image
															source={require("./../../assets/images/icons-ic-like-outline.png")}
															style={styles.iconsIcLikeOutlinImage}/>
														<Text
															style={styles.likeText}>Like</Text>
													</View>
													<View
														style={{
															flex: 1,
														}}/>
													<View
														style={styles.viewFiveView}>
														<Image
															source={require("./../../assets/images/icons-ic-share-outline.png")}
															style={styles.iconsIcShareOutliImage}/>
														<Text
															style={styles.shareText}>Share</Text>
													</View>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 11,
												right: 12,
												bottom: 12,
												height: 34,
												alignItems: "center",
											}}>
											<Image
												source={require("./../../assets/images/separator.png")}
												style={styles.separatorImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.viewSixView}>
												<Image
													source={require("./../../assets/images/icons-ic-comments-outline.png")}
													style={styles.iconsIcCommentsOuImage}/>
												<Text
													style={styles.commentText}>Comment</Text>
											</View>
										</View>
									</View>
									<Image
										source={require("./../../assets/images/group-5.png")}
										style={styles.rectangleTwoImage}/>
								</View>
							</View>
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
	},
	viewTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 57,
	},
	reviewTheTemplateText: {
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginRight: 1,
		marginTop: 10,
	},
	path2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 146,
		height: 2,
		marginTop: 16,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.18)",
		shadowRadius: 9,
		shadowOpacity: 1,
		position: "absolute",
		left: 1,
		right: 0,
		top: 75,
		height: 489,
	},
	baseImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		borderRadius: 12,
		width: null,
		height: 442,
		marginRight: 1,
	},
	viewFourView: {
		backgroundColor: "transparent",
		height: 441,
	},
	elementsHeaderPhonView: {
		backgroundColor: "transparent",
		height: 122,
	},
	rectangleImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 102,
		marginRight: 1,
	},
	elementsProfilePicImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	profileNameText: {
		color: "rgb(20, 24, 35)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	timeLocationText: {
		color: "rgb(97, 103, 112)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	iconsIcGlobeDarkImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 12,
		marginLeft: 3,
		marginTop: 1,
	},
	iconsIcMoreImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 20,
		marginTop: 2,
	},
	postText: {
		color: "rgb(20, 24, 35)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		marginTop: 13,
	},
	ellipseImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 11,
		width: 42,
		top: 15,
		height: 41,
	},
	shapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 23,
		width: 19,
		top: 26,
		height: 19,
	},
	elementsShortInterView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 91,
	},
	boundsImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 81,
	},
	iconsIcLikeBubbleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 18,
	},
	friendsText: {
		color: "rgb(97, 103, 112)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 4,
		marginTop: 1,
	},
	viewSevenView: {
		backgroundColor: "transparent",
		width: 48,
		height: 20,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	iconsIcLikeOutlinImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 20,
	},
	likeText: {
		color: "rgb(97, 103, 112)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	viewFiveView: {
		backgroundColor: "transparent",
		width: 60,
		height: 20,
		flexDirection: "row",
	},
	iconsIcShareOutliImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 20,
	},
	shareText: {
		backgroundColor: "transparent",
		color: "rgb(97, 103, 112)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 13,
		paddingTop:3,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	separatorImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 1,
	},
	viewSixView: {
		backgroundColor: "transparent",
		width: 84,
		height: 21,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	iconsIcCommentsOuImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 30,
		height: 20,
		marginBottom: 1,
	},
	commentText: {
		color: "rgb(97, 103, 112)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 13,
		height: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	rectangleTwoImage: {
		backgroundColor: "transparent",
		position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 56,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 25,
	},
	continueButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
