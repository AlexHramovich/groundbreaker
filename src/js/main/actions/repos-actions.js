import { getUsersRepos, getUser, getUsersIssues } from 'main/controller/controller';
import {
    START_FETCH_REPOS,
    SUCCESS_FETCH_REPOS,
    SUCCESS_FETCH_ISSUE,
} from 'main/constants/repos-constants';

export const startFetchRepos = () => ({ type: START_FETCH_REPOS });

export const successFetchUserData = (user, repos) => ({
    type: SUCCESS_FETCH_REPOS,
    user,
    repos,
});

export const successFetchIssues = (repo, issuesCount) => ({
    type: SUCCESS_FETCH_ISSUE,
    repo,
    issuesCount,
});


export function fetchIssues(userName, repo) {
    return dispatch =>
        getUsersIssues(userName, repo).then(result =>
            dispatch(successFetchIssues(repo, result.data.length)));
}

export function fetchRepos(userName) {
    return (dispatch) => {
        dispatch(startFetchRepos());

        return Promise.all([getUser(userName), getUsersRepos(userName)]).then(([user, repos]) => {
            dispatch(successFetchUserData(user, repos));

            repos.map(repo => dispatch(fetchIssues(user.get('login'), repo.get('name'))));
        });
    };
}
