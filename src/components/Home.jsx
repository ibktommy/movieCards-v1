import MovieCards from "./MovieCards";

const Home = ({ moviesDataProps, deleteMovie }) => {
	return (
		<div className="main">
			<h1 className="header">movies</h1>
			<MovieCards moviesDataProps={moviesDataProps} deleteMovie={deleteMovie} />
		</div>
	);
};

export default Home;
