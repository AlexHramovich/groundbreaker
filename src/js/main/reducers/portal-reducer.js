import { Map, Record, List } from 'immutable';
import { START_FETCH_REPOS, SUCCESS_FETCH_REPOS, PORTAL_OPENING, PORTAL_CLOSING } from 'main/constants/portal-constants';

const initialState = Record({
    isOpen: false,
    isLoading: false,
    activeUser: Map(),
    repos: List(),
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

export default function Repos(state = initialState(), action) {
    let newState;

    switch (action.type) {
    case START_FETCH_REPOS:
        newState = state.set('isLoading', true);

        return newState;

    case PORTAL_OPENING:
        newState = state.set('isOpen', true);

        return newState;

    case PORTAL_CLOSING:
        newState = state.set('isOpen', false);

        return newState;

    case SUCCESS_FETCH_REPOS:
        newState = state.set('repos', List(parseRepos(action.repos))).set('isLoading', false);

        return newState;

    default:
        return state;
    }
}
