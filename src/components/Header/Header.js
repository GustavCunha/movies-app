import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { Container, MenuButton, Title } from "./Header.styles";
import { theme } from "../../global/theme";

export function Header({ title }) {
	const navigation = useNavigation();

	return (
		<Container>
			<MenuButton onPress={() => navigation.openDrawer()}>
				<Feather name="menu" size={36} color={theme.color.white} />
			</MenuButton>
			<Title>{title}</Title>
		</Container>
	);
}
