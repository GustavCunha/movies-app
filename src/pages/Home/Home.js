import React from "react";
import { Feather } from "@expo/vector-icons";
import { Header } from "../../components/Header/Header";
import { Container, Input, SearchButton, SearchContainer } from "./Home.styles";

export function Home() {
	return (
		<Container>
			<Header title="React Prime" />
			<SearchContainer>
				<Input
					placeholder="Ex Vingadores"
					placeholderTextColor="#ddd"
				/>
				<SearchButton>
					<Feather name="search" size={30} color="white" />
				</SearchButton>
			</SearchContainer>
		</Container>
	);
}
