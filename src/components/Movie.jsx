const Movie = ({ movie }) => {
	const { title, overview, vote_average, poster_path } = movie;
	const imageLink = "https://image.tmdb.org/t/p/w500/";

	return (
		<article className="movie-card">
			<div className="movie-image">
				<img src={`${imageLink}${poster_path}`} alt={title} />
				<div className="movie-rating">
					<i class="fa-solid fa-thumbs-up"></i>
					<p>{vote_average}</p>
				</div>
			</div>

			<div className="movie-brief">
				<div className="movie-title">
					<span>Movie Title: </span>
					<span>{title}</span>
				</div>
				<div className="movie-brief-text">
					<span>Overview: </span>
					<span>{overview}</span>
				</div>
			</div>
		</article>
	);
};

export default Movie;
