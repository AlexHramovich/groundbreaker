import axios from 'axios';
import { getUsers } from 'main/constants/requests';
import { START_FETCH_USERS, SUCCESS_FETCH_USERS } from 'main/constants/user-constants';

export function startFetchUsers() {
    return {
        type: START_FETCH_USERS,
    };
}

export function successFetchUsers(users) {
    return {
        type: SUCCESS_FETCH_USERS,
        users,
    };
}

export function fetchUsers(userName) {
    return (dispatch) => {
        dispatch(startFetchUsers());

        return axios
            .get(getUsers(userName))
            .then((result) => {
                dispatch(successFetchUsers(result.data.items));
            })
            .catch(error => console.log(new Error(error)));
    };
}
