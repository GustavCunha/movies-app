import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home/Home";
import { Detail } from "../pages/Detail/Detail";
import { Search } from "../pages/Search/Search";
import { theme } from "../global/theme";

const Stack = createStackNavigator();

export function StackRoutes() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Detail"
				component={Detail}
				options={{ headerShown: false, title: "Detalhes" }}
			/>
			<Stack.Screen
				name="Search"
				component={Search}
				options={{ 
					title: "Sua Busca",
					headerTintColor: theme.color.white,

					headerTitleStyle: {
						color: theme.color.white
					},
					headerStyle: {
						backgroundColor: theme.color.primary90
					} 
				}}
			/>
		</Stack.Navigator>
	);
}
