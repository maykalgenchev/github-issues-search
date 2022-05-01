import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as commentsService from '../../services/commentsService';

import CommentsCard from '../CommentsList/CommentsCard/CommentsCard'

const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const location = useLocation()

    const username = location.state.username;
    const repoName = location.state.repoName;
    const issueNumber = location.state.issueNumber;
    const issueName = location.state.issueName;

    console.log(issueNumber);

    useEffect(() => {
        commentsService.getAllComments(username, repoName, issueNumber).then(res => setComments(res))
    }, [username, repoName, issueNumber]);



    return (<>
        <div className="card-deck">
            {comments.length > 0
                ? (<>
                    <div className="d-flex justify-content-center">
                        <h1>All comments to "{issueName}" issue</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to={`/${username}/${repoName}/issues`} state={{ username: username, repoName: repoName }}>Go back to all issues</Link>
                    </div>
                    <div className="row d-flex justify-content-center">
                        {comments.map(x => <CommentsCard key={x.id} comment={x} />)}
                    </div>
                </>
                )
                : <>
                    <div className="d-flex justify-content-center">
                        <h1>There are no comments to that issue yet.</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to={`/${username}/${repoName}/issues`} state={{ username: username, repoName: repoName }}>Go back to all issues</Link>
                    </div>
                </>
            }
        </div>
    </>
    );
}



export default CommentsList;