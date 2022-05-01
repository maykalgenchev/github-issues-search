export let getAllIssues = async (nickname, repo) => {
    let response = await fetch(`https://api.github.com/repos/${nickname}/${repo}/issues`)

    let issues = await response.json();

    let result = Object.values(issues)

    return result;
};

