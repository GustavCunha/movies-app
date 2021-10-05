import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import { BannerItem, Container, Rate, RateContainer, Title } from './SliderItem.styles';
import { theme } from '../../global/theme';

export function SliderItem({data, navigatePage}) {
    return (
        <Container activeOpacity={0.7} onPress={navigatePage}>
            <BannerItem 
                source={{uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}
            />

            <Title numberOfLines={1}>{data.title}</Title>
                
            <RateContainer>
                <Ionicons name='md-star' size={12} color={theme.color.warning}/>
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}
