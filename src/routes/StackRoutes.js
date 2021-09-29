import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home/Home";

const Stack = createStackNavigator();

export function StackRoutes() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
