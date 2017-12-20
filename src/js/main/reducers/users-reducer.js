import { List, Record } from 'immutable';
import { START_FETCH_USERS, SUCCESS_FETCH_USERS, RESET_STATE } from 'main/constants/user-constants';

const StateRecord = Record({
    users: List(),
    isUsersLoading: false,
});

export default function getUsers(state = new StateRecord(), action) {
    switch (action.type) {
    case START_FETCH_USERS:
        return state.set('isUsersLoading', true);

    case RESET_STATE:
        return StateRecord();

    case SUCCESS_FETCH_USERS:
        return state.set('users', List(action.users)).set('isUsersLoading', false);

    default:
        return state;
    }
}
