import { Button, Input } from "@ui-kitten/components"
import * as React from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "../components/Themed"

export default function TabOneScreen() {
	const [ value, setValue ] = React.useState("")
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Add Players</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<Input
				style={styles.input}
				placeholder="Add Player Name"
				value={value}
				onChangeText={(nextValue) => setValue(nextValue)}
			/>
			<Button>Add Player</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		fontSize: 20,
		fontWeight: "bold"
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
