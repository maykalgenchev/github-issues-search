import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IssueCard = ({ issue, username, repoName }) => {
    let issueNumber = issue.number;
    let issueName = issue.title
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={issue.user.avatar_url} />
            <Card.Body>
                <Link to={`/${username}/${repoName}/issues/${issueNumber}/comments`} state={{ issueName: issueName, username: username, repoName: repoName, issueNumber: issueNumber }}><Card.Title>{issue.title}</Card.Title></Link>
                <Card.Text>
                    {issue.user.login}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default IssueCard
