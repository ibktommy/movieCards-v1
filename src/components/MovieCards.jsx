import Movie from "./Movie";

const MovieCards = ({ moviesDataProps, deleteMovie }) => {
	return (
		<div className="card-container">
			{moviesDataProps.length === 0 ? (
				<h1>No movies to display</h1>
			) : (
				<>
					{moviesDataProps.map((movie, id) => {
						return <Movie key={id} movie={movie} deleteMovie={deleteMovie} />;
					})}
				</>
			)}
		</div>
	);
};

export default MovieCards;
