import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Users from 'main/reducers/users-reducer';
import Repos from 'main/reducers/portal-reducer';

import MainContainer from 'main/containers/main-container';

import './index.scss';

const reducer = combineReducers({
    users: Users,
    repos: Repos,
});
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <MainContainer />
    </Provider>,
    document.getElementById('app'),
);
