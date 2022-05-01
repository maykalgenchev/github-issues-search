export let getAllComments = async (username, repoName, issueNumber) => {
    let response = await fetch(`https://api.github.com/repos/${username}/${repoName}/issues/${issueNumber}/comments`)

    let comments = await response.json();

    let result = Object.values(comments);
    return result;
};