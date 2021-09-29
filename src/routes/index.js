import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Movies } from "../pages/Movies/Movies";
import { StackRoutes } from "./StackRoutes";
import { theme } from "../global/theme";

const { drawer, secondary, white } = theme.color;

const Drawer = createDrawerNavigator();

export function Routes() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
				drawerStyle: {
					backgroundColor: drawer,
					paddingTop: 20,
				},
				drawerActiveBackgroundColor: secondary,
				drawerActiveTintColor: white,
				drawerInactiveTintColor: white,
			}}
		>
			<Drawer.Screen
				name="HomeDrawer"
				component={StackRoutes}
				options={{
					title: "Home",
					drawerIcon: ({ focused, size, color }) => (
						<MaterialCommunityIcons
							name={focused ? "movie-open" : "movie-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Movies"
				component={Movies}
				options={{
					title: "Meus filmes",
					drawerIcon: ({ focused, size, color }) => (
						<MaterialCommunityIcons
							name={focused ? "archive" : "archive-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
}
