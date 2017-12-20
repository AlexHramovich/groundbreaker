import { connect } from 'react-redux';

import { fetchUsers, resetApp } from 'main/actions/user-actions';
import { fetchRepos } from 'main/actions/repos-actions';

import Main from 'main/components/main/main';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    fetchUsers: (page, limit) => dispatch(fetchUsers(page, limit)),
    fetchRepos: userLogin => dispatch(fetchRepos(userLogin)),
    resetApp: () => dispatch(resetApp()),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
