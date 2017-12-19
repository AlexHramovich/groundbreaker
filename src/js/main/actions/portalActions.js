import axios from 'axios';
import { getUsersRepos } from 'main/constants/requests';
import { START_FETCH_REPOS, SUCCESS_FETCH_REPOS } from 'main/constants/portal-constants';

export function startFetchRepos() {
    return {
        type: START_FETCH_REPOS,
    };
}

export function successFetchRepos(repos) {
    return {
        type: SUCCESS_FETCH_REPOS,
        repos,
    };
}

export function fetchUsers(userName) {
    return (dispatch) => {
        dispatch(startFetchRepos());

        return axios
            .get(getUsersRepos(userName))
            .then((result) => {
                dispatch(successFetchRepos(result.data.items));
            })
            .catch(error => console.log(new Error(error)));
    };
}
