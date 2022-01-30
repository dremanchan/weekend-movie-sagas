import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function DetailsPage() {
    const details = useSelector(store => store.details);
        console.log('details are', details);
    return (
        <>
            <h1>Movie Details</h1>
            <Link to="/">
                <Button variant="outlined">Home</Button>
            </Link>
        </>
    )
}

export default DetailsPage;