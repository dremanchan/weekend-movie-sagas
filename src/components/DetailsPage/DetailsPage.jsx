import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';

function DetailsPage() {
    const details = useSelector(store => store.details);
        console.log('details are', details);
    return (
        <>
            <Container className="detailContainer" maxWidth="md">
                <h1 className="detailHeader">Movie Details</h1>
                <h2>{details.movieTitle}</h2>
                <img src={details.moviePoster} />
                <p>{details.movieDesc}</p>
                <h4>Genres: 
                    {details.genres.map(genre => (
                        <p key={genre}>{genre}</p>
                    ))}
                </h4>
                <Link to="/">
                    <Button variant="outlined">Home</Button>
                </Link>
            </Container>
        </>
    )
}

export default DetailsPage;