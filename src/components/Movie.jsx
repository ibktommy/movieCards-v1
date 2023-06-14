import { useState } from "react";

const Movie = ({ movie, deleteMovie }) => {
	const { title, overview, vote_average, poster_path, id } = movie;
	const imageLink = "https://image.tmdb.org/t/p/w500/";

	const [readMore, setReadMore] = useState(false);

	function toggleReadMore() {
		setReadMore(!readMore);
	}

	return (
		<article className="movie-card">
			<div className="movie-image">
				<img src={`${imageLink}${poster_path}`} alt={title} />
				<div className="movie-rating">
					<i className="fa-solid fa-thumbs-up"></i>
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
					{!readMore ? (
						<span>
							{overview.substring(0, 150)}
							<button onClick={toggleReadMore}>...read more</button>
						</span>
					) : (
						<span>
							{overview}
							<button onClick={toggleReadMore}>...read less</button>
						</span>
					)}
				</div>

				<button className="movie-btn" onClick={() => deleteMovie(id)}>
					not interested
				</button>
			</div>
		</article>
	);
};

export default Movie;
