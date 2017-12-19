import { connect } from 'react-redux';

import { fetchUsers } from 'main/actions/userActions';

import Main from 'main/components/main/main';

const mapStateToProps = state => ({
    users: state.users.get('users').toJS(),
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: (page, limit) => dispatch(fetchUsers(page, limit)),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
