import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Header } from "../../components/Header/Header";
import { SliderItem } from "../../components/SliderItem/SliderItem";

import API, { key } from "../../services/api";
import { theme } from "../../global/theme";
import { getListMovies, randomBanner } from "../../utils/movie";

import { 
	Banner, 
	BannerButton,
	Container, 
	Input, 
	SearchButton, 
	SearchContainer, 
	SliderMovie, 
	Title 
} from "./Home.styles";

export function Home() {
	const navigation = useNavigation();

	const [nowMovies, setNowMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [topMovies, setTopMovies] = useState([]);
	const [bannerMovie, setBannerMovie] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(()=> {
		let isActive = true;
		const ac = new AbortController();

		async function getMovies() {

			const [nowData, popularData, topData] = await Promise.all([
				API.get('/movie/now_playing', {
					params:{
						api_key: key,
						language:'pt-BR',
						page: 1,
					}
				}),
				API.get('/movie/popular', {
					params:{
						api_key: key,
						language:'pt-BR',
						page: 1,
					}
				}),
				API.get('/movie/top_rated', {
					params:{
						api_key: key,
						language:'pt-BR',
						page: 1,
					}
				}),
			])

			if(isActive) {
				const nowList = getListMovies(10, nowData.data.results);
				const popularList = getListMovies(5, popularData.data.results);
				const topList = getListMovies(5, topData.data.results);

				setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)]);
				
				setNowMovies(nowList);
				setPopularMovies(popularList);
				setTopMovies(topList);
	
				setLoading(false);
			}
		}

		getMovies();

		return () => {
			isActive = false;
			ac.abort();
		}
	}, []);

	if(loading) {
		return (
			<Container>
				<ActivityIndicator size="large" color={theme.color.white}/>
			</Container>
		)
	}

	function navigateDetailsPage(item) {
		navigation.navigate("Detail", {id: item.id});

	}

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

			<ScrollView showsVerticalScrollIndicator={false}>
				<Title>Em cartaz</Title>
				<BannerButton activeOpacity={0.9} onPress={() => navigateDetailsPage(bannerMovie)}>
					<Banner
						resizeMethod="resize" 
						source={{uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`}}
					/>
				</BannerButton>

				<SliderMovie 
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={nowMovies}
					renderItem={({item}) => <SliderItem data={item} navigatePage={()=> navigateDetailsPage(item)} />}
					keyExtractor={(item) => String(item.id)}
				/>

				<Title>Populares</Title>
				<SliderMovie 
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={popularMovies}
					renderItem={({item}) => <SliderItem data={item} navigatePage={()=> navigateDetailsPage(item)} />}
					keyExtractor={(item) => String(item.id)}
				/>

				<Title>Mais votados</Title>
				<SliderMovie 
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={topMovies}
					renderItem={({item}) => <SliderItem data={item} navigatePage={()=> navigateDetailsPage(item)} />}
					keyExtractor={(item) => String(item.id)}
				/>
			</ScrollView>
		</Container>
	);
}
