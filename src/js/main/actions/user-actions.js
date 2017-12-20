import { getUsers } from 'main/controller/controller';
import { START_FETCH_USERS, SUCCESS_FETCH_USERS, RESET_STATE } from 'main/constants/user-constants';

export const startFetchUsers = () => ({ type: START_FETCH_USERS });

export const successFetchUsers = users => ({
    type: SUCCESS_FETCH_USERS,
    users,
});

export const resetApp = () => ({ type: RESET_STATE });

export function fetchUsers(userName) {
    return (dispatch) => {
        dispatch(startFetchUsers());

        return getUsers(userName).then((result) => {
            dispatch(successFetchUsers(result));
        });
    };
}
