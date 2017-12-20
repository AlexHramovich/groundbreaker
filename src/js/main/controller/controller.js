import axios from 'axios';
import { Map, List } from 'immutable';

const AUTH_TOKEN = '36e55d8a85696aaef8efa0ba4992f1d76b7774fe';
axios.defaults.headers.common.Authorization = `token ${AUTH_TOKEN}`;

export const parseUsers = users =>
    List(users.map(user =>
        Map({
            id: user.id,
            login: user.login,
            avatar: user.avatar_url,
        })));

export const parseRepos = repos =>
    List(repos.map(repo =>
        Map({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            issues: null,
        })));

export const getUsersIssues = (userLogin, userRepo) =>
    axios.get(`https://api.github.com/repos/${userLogin}/${userRepo}/issues`);

export const getUsers = userLogin =>
    axios
        .get(`https://api.github.com/search/users?q=${userLogin}+in:login&type:user`)
        .then(response => response.data.items)
        .then(users => parseUsers(users));

export const getUser = userLogin =>
    axios.get(`https://api.github.com/users/${userLogin}`).then(response => Map(response.data));

export const getUsersRepos = userLogin =>
    axios
        .get(`https://api.github.com/users/${userLogin}/repos`)
        .then(response => response.data)
        .then(repos => parseRepos(repos));
