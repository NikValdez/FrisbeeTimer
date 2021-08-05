import { StackScreenProps } from "@react-navigation/stack"
import { Button } from "@ui-kitten/components"
import * as React from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "../components/Themed"
import { RootStackParamList } from "../types"

type NavProps = StackScreenProps<RootStackParamList, "TabTwo">

export default function Home({ navigation }: NavProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Add a Team</Text>
			<Button onPress={() => navigation.navigate("TabTwo")}>Add a Team</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center"
		// justifyContent: "center"
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 30
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%"
	},
	input: {
		margin: 100
	}
})
