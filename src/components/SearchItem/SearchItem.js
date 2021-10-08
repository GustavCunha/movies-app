import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import { Banner, Container, Rate, RateContainer, Title } from './SearchItem.styles';
import { theme } from '../../global/theme';

export function SearchItem({data, navigatePage}) {
    
    function detailMovie() {
        if(data.release_date === '') {
            alert('Filme ainda sem data!');
            return;
        }

        navigatePage(data)
    }

    return (
        <Container onPress={detailMovie}>
            {data?.poster_path ? (
                <Banner 
                    resizeMethod='resize'
                    source={{uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`}}
                />
            ) : (
                <Banner 
                    resizeMethod='resize'
                    source={require('../../assets/semfoto.png')}
                />
            )}
            <Title>{data?.title}</Title>
            <RateContainer>
                <Ionicons name='md-star' size={12} color={theme.color.warning} />
                <Rate>{data?.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}
