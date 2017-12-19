import axios from 'axios';
import { getUsersRepos, getUser } from 'main/constants/requests';
import { START_FETCH_REPOS, SUCCESS_FETCH_REPOS, PORTAL_OPENING, PORTAL_CLOSING } from 'main/constants/portal-constants';

export function portalOpening() {
    return {
        type: PORTAL_OPENING,
    };
}
export function portalClosing() {
    return {
        type: PORTAL_CLOSING,
    };
}

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

export function fetchCurentUser(userName) {
    return (dispatch) => {
        return axios
            .get(getUser(userName))
            .then((result) => {
                dispatch(successFetchRepos(result.data));
            })
            .catch(error => console.log(new Error(error)));
    };
}

export function fetchRepos(userName) {
    return (dispatch) => {
        dispatch(startFetchRepos());
        dispatch(portalOpening());

        return axios
            .get(getUsersRepos(userName))
            .then((result) => {
                dispatch(successFetchRepos(result.data));
            })
            .catch(error => console.log(new Error(error)));
    };
}
