import styled from "styled-components/native";
import {theme} from '../../global/theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.color.primary};
`;

export const Header = styled.View`
    z-index: 99;
    position: absolute;
    top: 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: rgba(25,26,48,0.8);
    border-radius: 23px;
    justify-content: center;
    align-items: center;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 350px;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;
`;

export const ButtonLink = styled.TouchableOpacity`
    background-color: ${theme.color.secondary};
    width: 63px;
    height: 63px;
    border-radius: 34px;
    position: absolute;
    top: 315px;
    right: 15px;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;

export const Title = styled.Text`
    color: ${theme.color.white};
    font-size: 22px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 20px;
`;

export const ContentArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
`;

export const Rate = styled.Text`
    color: ${theme.color.white};
    font-weight: bold;
    font-size: 18px;
`;

export const ListGenres = styled.FlatList`
    padding-left: 14px;
    margin: 8px 0;
    max-height: 35px;
    min-height: 35px;
`;

export const Description = styled.Text`
    padding: 0 14px 30px;
    color: ${theme.color.white};
    font-size: 16px;
    line-height: 20px;
`;