import { Link } from 'react-router-dom';

const IncorrectInputs = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1>Username or Repository name incorrect</h1>
            </div>
            <div className="d-flex justify-content-center">
                <Link to='/'>try again...</Link>
            </div>
        </>
    );
}

export default IncorrectInputs;