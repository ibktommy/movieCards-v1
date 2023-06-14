import { useState } from "react";

const Movie = ({ movie }) => {
	const { title, overview, vote_average, poster_path } = movie;
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
					{!readMore ? (
						<span>
							{overview.substring(1, 150)}
							<button onClick={toggleReadMore}>...read more</button>
						</span>
					) : (
						<span>
							{overview}
							<button onClick={toggleReadMore}>...read less</button>
						</span>
					)}
				</div>
			</div>
		</article>
	);
};

export default Movie;
