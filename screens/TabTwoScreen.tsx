import AsyncStorage from "@react-native-async-storage/async-storage"
import * as React from "react"
import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "../components/Themed"

export default function TabTwoScreen() {
	const [ players, setPlayers ] = useState([])

	useEffect(() => {
		retrievePlayers()
	}, [])

	const retrievePlayers = async () => {
		try {
			const value = await AsyncStorage.getItem("PLAYERS")
			if (value !== null) {
				const parsedValue = JSON.parse(value)
				setPlayers(parsedValue)
			}
		} catch (error) {
			// Error retrieving data
		}
	}
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Players </Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

			{/* {players.name} | time: {players.time} */}
			{players.map((player) => <Text key={player.name}>{player.name}</Text>)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center"
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 20
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%"
	}
})
