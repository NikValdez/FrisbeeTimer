import AsyncStorage from "@react-native-async-storage/async-storage"
import { Button, Input } from "@ui-kitten/components"
import * as React from "react"
import { useEffect } from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "../components/Themed"

export default function AddPlayers() {
	const [ player, setPlayer ] = React.useState({ name: "", time: 0 })
	const [ allPlayers, setAllPlayers ] = React.useState<undefined | null | []>([])

	useEffect(() => {
		retrievePlayers()
	}, [])

	const retrievePlayers = async () => {
		try {
			const value = await AsyncStorage.getItem("PLAYERS")
			if (value !== null) {
				const parsedValue = JSON.parse(value)
				setAllPlayers(parsedValue)
			}
		} catch (error) {
			// Error retrieving data
		}
	}

	async function CreatePlayer() {
		if (allPlayers && player) {
			const addPlayer = [ ...allPlayers, player ]
			const stringPlayer = JSON.stringify(addPlayer)
			try {
				await AsyncStorage.setItem("PLAYERS", stringPlayer)
				setPlayer({ name: "", time: 0 })
			} catch (error) {
				console.log(error)
			}
		}
	}
	console.log(allPlayers)
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Add Players</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<Input
				style={styles.input}
				placeholder="Add Player Name"
				value={player.name}
				onChangeText={(nameVal) =>
					setPlayer({
						...player,
						name: nameVal
					})}
			/>
			<Button onPress={CreatePlayer}>Add Player</Button>
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
