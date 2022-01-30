import { useSelector } from 'react-redux';

function DetailsPage() {
    const details = useSelector(store => store.details);
        console.log('details are', details);
    return (
        <>
            <h1>Movie Details</h1>
        </>
    )
}

export default DetailsPage;