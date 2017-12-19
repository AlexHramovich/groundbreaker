import { connect } from 'react-redux';

import { fetchUsers } from 'main/actions/userActions';
import { fetchRepos } from 'main/actions/portalActions';

import Main from 'main/components/main/main';

const mapStateToProps = state => ({
    users: state.users.get('users').toJS(),
    isPortalOpen: state.repos.get('isOpen'),
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: (page, limit) => dispatch(fetchUsers(page, limit)),
    fetchRepos: userLogin => dispatch(fetchRepos(userLogin)),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
