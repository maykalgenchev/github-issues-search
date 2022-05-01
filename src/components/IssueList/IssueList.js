import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as repoService from '../../services/repoService';


import IssueCard from './IssueCard/IssueCard'
// import { useLocation } from 'react-router-dom';
const IssueList = () => {
    const [issues, setIssues] = useState([]);
    const navigate = useNavigate();

    const location = useLocation();
    const username = location.state.username;
    const repoName = location.state.repoName;

    useEffect(() => {
        try {
            repoService.getAllIssues(username, repoName)
                .then(res => {
                    setIssues(res);
                }, [username, repoName])
        } catch (err) {
            return;
        }
    }, [username, repoName])

    if (issues[0] === 'Not Found') {
        navigate('/404');
    }


    return (<>
        <div className="card-deck">
            {issues.length > 0
                ? (<>
                    <div className="d-flex justify-content-center">
                        <h1>All issues to "{repoName}" repository</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to='/'>Go back to search</Link>
                    </div>
                    <div className="row d-flex justify-content-center">
                        {issues.map(x => <IssueCard key={x.id} issue={x} username={username} repoName={repoName} />)}
                    </div>
                </>
                )
                : <>
                    <div className="d-flex justify-content-center">
                        <h1>There are no issues to that repository yet.</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/">Go back to search...</Link>
                    </div>
                </>
            }
        </div>
    </>
    )
}

export default IssueList;