import Movie from "./Movie";

const MovieCards = ({ moviesDataProps }) => {
	console.log(moviesDataProps);
	return (
		<div className="card-container">
			{moviesDataProps.length === 0 ? (
				<h1>No movies to display</h1>
			) : (
				<>
					{moviesDataProps.map((movie, id) => {
						return <Movie key={id} movie={movie} />;
					})}
				</>
			)}
		</div>
	);
};

export default MovieCards;
