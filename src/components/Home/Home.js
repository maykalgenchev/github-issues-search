import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as repoService from '../../services/repoService'
const Home = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [repoName, setRepoName] = useState('')
    const [issues, setIssues] = useState([])

    const submitHandler = () => {
        try {
            repoService.getAllIssues(username, repoName)
                .then(res => {
                    setIssues(res);
                }, [username, repoName])
        } catch (err) {
            return err;
        }

        if (issues[0] === 'Not Found') {
            navigate('/404');
        }
    }


    return (
        <div className="d-flex justify-content-center">

            <form className="w-50" onSubmit={submitHandler} method="POST">
                <div className="form-group my-2">
                    <label>Username</label>
                    <input
                        type="text"
                        // value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter username" />
                </div>
                <div className="form-group my-2">
                    <label className='shrift'>Repository name</label>
                    <input
                        type="text"
                        onChange={(e) => setRepoName(e.target.value)}
                        className="form-control"
                        id="repoName"
                        name="repoName"
                        placeholder="Enter repository name" />
                </div>
                <div className="d-flex justify-content-center my-3">
                    <Link to={`/${username}/${repoName}/issues`} state={{ username: username, repoName: repoName, issues: issues }}><button className="btn btn-primary">Submit</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Home;