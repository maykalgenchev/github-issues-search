import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1>404 Not Found</h1>
            </div>
            <div className="d-flex justify-content-center">
                <Link to='/'>try again...</Link>
            </div>
        </>
    );
}

export default NotFound;
