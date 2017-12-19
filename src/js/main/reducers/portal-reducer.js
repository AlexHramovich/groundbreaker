import { Map, Record, List } from 'immutable';
import { START_FETCH_REPOS, SUCCESS_FETCH_REPOS } from 'main/constants/portal-constants';

const initialState = Record({
    isOpen: false,
    isLoading: false,
    activeUser: Map(),
    pepos: List(),
});

const parseRepos = (repos) => {
    const result = repos.map(repo =>
        Map({
            id: repo.id,
            name: repo.name,
            description: repo.description,
        }));

    return result;
};

export default function getUsers(state = initialState(), action) {
    let newState;

    switch (action.type) {
    case START_FETCH_REPOS:
        newState = state.set('isUsersLoading', true);

        return newState;

    case SUCCESS_FETCH_REPOS:
        newState = state.set('repos', List(parseRepos(action.repos)));

        return newState;

    default:
        return state;
    }
}
