export const getUsers = userLogin => `https://api.github.com/search/users?q=${userLogin}+in:login&type:user`;
export const getUser = userLogin => `https://api.github.com/users/${userLogin}`;
export const getUsersRepos = userLogin => `https://api.github.com/users/${userLogin}/repos`;
export const getUsersIssues = (userLogin, userRepo) => `https://api.github.com/repos/${userLogin}/${userRepo}/issues`;
