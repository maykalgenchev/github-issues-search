const CommentsCard = ({ comment }) => {
    return (<>
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{comment.user.login}</h1>
                <p className="card-text">{comment.body}</p>
            </div>
        </div>
    </>
    );
}

export default CommentsCard;
