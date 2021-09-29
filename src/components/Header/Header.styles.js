import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
	height: 70px;
	flex-direction: row;
	align-items: center;
	padding-left: 14px;
`;

export const MenuButton = styled.TouchableOpacity`
	height: 70px;
	flex-direction: row;
	align-items: center;
`;

export const Title = styled.Text`
	color: ${theme.color.white};
	font-size: 30px;
	font-weight: bold;
	margin-left: 14px;
`;
