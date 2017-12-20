import { Map, List, Record } from 'immutable';
import {
    START_FETCH_REPOS,
    SUCCESS_FETCH_REPOS,
    SUCCESS_FETCH_ISSUE,
} from 'main/constants/repos-constants';

import { RESET_STATE } from 'main/constants/user-constants';

const StateRecord = Record({
    isOpen: false,
    isLoading: false,
    activeUser: Map(),
    repos: List(),
});

export default function Repos(state = StateRecord(), action) {
    switch (action.type) {
    case START_FETCH_REPOS:
        return state.set('isLoading', true);

    case RESET_STATE:
        return StateRecord();

    case SUCCESS_FETCH_ISSUE: {
        const currentRepo = state
            .get('repos')
            .indexOf(state.get('repos').find(repo => repo.get('name') === action.repo));

        return state.setIn(['repos', currentRepo, 'issues'], action.issuesCount);
    }

    case SUCCESS_FETCH_REPOS:
        return state
            .set('repos', action.repos)
            .set('isLoading', false)
            .set('activeUser', action.user);

    default:
        return state;
    }
}
