import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import API, {key} from '../../services/api';
import { Container, ListMovie, Name } from './Search.styles';
import { SearchItem } from '../../components/SearchItem/SearchItem';

export function Search() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isActive = true;

        async function getSearchMovie(){
            const response = await API.get('/search/movie', {
                params: {
                    query: route?.params?.name,
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            });

            if(isActive) {
                setMovie(response.data.results);
                setLoading(false);
            }
        }

        if(isActive) {
            getSearchMovie();
        }

        return () => {
            isActive = false
        }
    }, [])

    function navigateDetailsPage(item) {
        navigation.navigate('Detail', {id: item.id});
    }
    
    if(loading) {
        return (
            <Container>

            </Container>
        )
    }

    return (
        <Container>
            <ListMovie 
                data={movie}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item})=> <SearchItem data={item} navigatePage={()=> navigateDetailsPage(item)} />}
            />
        </Container>
    )
}
