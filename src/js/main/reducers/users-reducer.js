import { Map, Record, List } from 'immutable';
import { START_FETCH_USERS, SUCCESS_FETCH_USERS } from 'main/constants/user-constants';

const initialState = Record({
    users: List(),
    isUsersLoading: false,
});

const parseUsers = (users) => {
    const result = users.map(user =>
        Map({
            id: user.id,
            login: user.login,
            avatar: user.avatar_url,
        }));

    return result;
};

export default function getUsers(state = initialState(), action) {
    let newState;

    switch (action.type) {
    case START_FETCH_USERS:
        newState = state.set('isUsersLoading', true);

        return newState;

    case SUCCESS_FETCH_USERS:
        newState = state.set('users', List(parseUsers(action.users)));
        newState = newState.set('isUsersLoading', false);

        console.log(newState);
        return newState;

    default:
        return state;
    }
}
