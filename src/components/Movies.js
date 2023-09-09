import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function Movies ({id, title,mainImg,summary,genres}) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={mainImg} alt="moviePoster"/>
            <p>{summary}</p>
            <ul>
            {genres?.map((g) => (
                <li key={g}>{g}</li>
            ))}
            </ul>
        </div>
    );
    
}

Movies.propTypes = {
    id : PropTypes.number.isRequired, 
    title : PropTypes.string.isRequired, 
    mainImg : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string)
};

export default Movies;