import MovieCards from "./MovieCards";

const Home = ({ moviesDataProps }) => {
	return (
		<div className="main">
      <h1 className="header">movies</h1>
      <MovieCards moviesDataProps={moviesDataProps} />
		</div>
	);
};

export default Home;
