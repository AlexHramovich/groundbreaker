import { connect } from 'react-redux';

import UsersInfo from 'main/components/users-info/users-info';

const mapStateToProps = state => ({
    isLoading: state.repos.get('isLoading'),
    repos: state.repos.get('repos'),
    userName: state.repos.get('activeUser').get('login'),
    avatar: state.repos.get('activeUser').get('avatar_url'),
});

const UsersInfoContainer = connect(mapStateToProps)(UsersInfo);

export default UsersInfoContainer;
