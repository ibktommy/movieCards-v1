import { useEffect, useState } from "react";
import Home from "./components/Home";
import Loading from "./components/Loading";

const App = () => {
  const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	const apiURL =
		"https://api.themoviedb.org/3/movie/popular?api_key=30b4ef3f8b7fd7bcf7870dddc7c9a135&language=en-US&page=1";

    async function fetchMovies() {
			setLoading(true);
			try {
				const response = await fetch(apiURL);
				const responseData = (await response.json()).results;

				setMovies(responseData);
				setLoading(false);
				console.log(movies);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		}


	useEffect(() => {
		fetchMovies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function deleteMovie(id) {
		const filteredMovies = movies.filter((movie) => movie.id !== id);
		return setMovies(filteredMovies);
	}

	if (loading) {
		return (
			<div className="container">
				<Loading />
			</div>
		);
	}

	return (
		<div className="container">
			<Home moviesDataProps={movies} deleteMovie={deleteMovie} />
		</div>
	);
};

export default App;
