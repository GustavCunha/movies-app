import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Feather, Ionicons} from '@expo/vector-icons';
import Stars from 'react-native-stars';
import { Modal, ScrollView } from 'react-native';

import API, {key} from '../../services/api';
import { theme } from '../../global/theme';
import {deleteMovie, hasMovie, saveMovie} from '../../utils/storage';

import { Genres } from '../../components/Genres/Genres';
import { ModalLink } from '../../components/ModalLink/ModalLink';

import { 
    Banner,
    ButtonLink,
    Container, 
    ContentArea, 
    Description, 
    Header, 
    HeaderButton, 
    ListGenres, 
    Rate, 
    Title 
} from './Detail.styles';

export function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState({});
    const [openLink, setOpenLink] = useState(false);
    const [favoritedMovie, setFavoritedMovie] = useState(false);

    useEffect(()=> {
        let isActive = true;

        async function getMovie() {
            const response = await API.get(`/movie/${route.params?.id}`, {
                params: {
                    api_key: key,
                    language: 'pt-BR'
                }
            })
            .catch((err)=> {console.log(err)})

            if(isActive) {
                setMovie(response.data);
                const isFavorite = await hasMovie(response.data);
                setFavoritedMovie(isFavorite);
            }
        }
        if(isActive) getMovie();

        return () => {
            isActive = false;
        } 
    },[]);

    async function handleFavoriteMovie(movie) {
        if(favoritedMovie) {
            await deleteMovie(movie.id);
            setFavoritedMovie(false);
            alert('Filme removido da sua lista!');
        }else{
            await saveMovie('@primereact', movie);
            setFavoritedMovie(true);
            alert('Filme salvo na sua lista');
        }
    }

    return (
        <Container>
            <Header>
                <HeaderButton onPress={()=> navigation.goBack()}>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color={theme.color.white}
                    />
                </HeaderButton>

                <HeaderButton onPress={() => handleFavoriteMovie(movie)}>
                    {favoritedMovie ? (
                        <Ionicons
                            name="bookmark"
                            size={28}
                            color={theme.color.white}
                        />
                    ) : (
                        <Ionicons
                            name="bookmark-outline"
                            size={28}
                            color={theme.color.white}
                        />
                    )}
                </HeaderButton>
            </Header>

            <Banner 
                source={{uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}}
                resizeMethod="resize"
            />

            <ButtonLink onPress={() => setOpenLink(true)}>
                <Feather name="link" size={24} color={theme.color.white}/>
            </ButtonLink>

            <Title numberOfLines={2}>{movie.title}</Title>

            <ContentArea>
                <Stars 
                    default={movie.vote_average}
                    count={10}
                    half={true}
                    starSize={20}
                    fullStar={<Ionicons name="md-star" size={24} color={theme.color.warning} />}
                    emptyStar={<Ionicons name="md-star-outline" size={24} color={theme.color.warning} />}
                    halfStar={<Ionicons name="md-star-half" size={24} color={theme.color.warning} />}
                    disabled={true}
                />

                <Rate>{movie.vote_average}/10</Rate>
            </ContentArea>

            <ListGenres 
                data={movie?.genres}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Genres data={item} />}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Descrição</Title>
                <Description>{movie?.overview}</Description>
            </ScrollView>

            <Modal animationType="slide" transparent={true} visible={openLink}>
                <ModalLink 
                    link={movie?.homepage}
                    title={movie?.title}
                    closeModal={()=> setOpenLink(false)}
                />
            </Modal>
        </Container>
    )
}
