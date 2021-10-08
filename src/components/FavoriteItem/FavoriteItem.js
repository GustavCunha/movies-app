import React from 'react';
import {Ionicons, Feather} from '@expo/vector-icons';
import { theme } from '../../global/theme';
import { 
    ActionContainer,
    Container, 
    DeleteButton, 
    DetailButton, 
    Rate, 
    RateContainer, 
    Title 
} from './FavoriteItem.styles';

export function FavoriteItem({data, deleteMovie, navigatePage}) {
    return (
        <Container>
            <Title size={22}>{data.title}</Title>

            <RateContainer>
                <Ionicons name='md-star' size={12} color={theme.color.warning}/>
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>

            <ActionContainer>
                <DetailButton onPress={() => navigatePage(data)}>
                    <Title size={14}>Ver Detalhes</Title>
                </DetailButton>

                <DeleteButton onPress={() => deleteMovie(data.id)}>
                    <Feather name='trash' size={24} color={theme.color.white}/>
                </DeleteButton>
            </ActionContainer>
        </Container>
    )
}
