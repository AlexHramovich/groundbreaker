import axios from 'axios';

const AUTH_TOKEN = '36e55d8a85696aaef8efa0ba4992f1d76b7774fe';
axios.defaults.headers.common.Authorization = `token ${AUTH_TOKEN}`;

export const getUsers = userLogin => axios.get(`https://api.github.com/search/users?q=${userLogin}+in:login&type:user`);
export const getUser = userLogin => axios.get(`https://api.github.com/users/${userLogin}`);
export const getUsersRepos = userLogin => axios.get(`https://api.github.com/users/${userLogin}/repos`);
export const getUsersIssues = (userLogin, userRepo) => axios.get(`https://api.github.com/repos/${userLogin}/${userRepo}/issues`);
