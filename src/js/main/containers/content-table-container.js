import { connect } from 'react-redux';
import { fetchRepos } from 'main/actions/repos-actions';

import ContentTable from 'main/components/content-table/content-table';

const mapStateToProps = state => ({
    users: state.users.get('users'),
});

const mapDispatchToProps = dispatch => ({
    startFetchRepos: userName => dispatch(fetchRepos(userName)),
});

const ContentTableContainer = connect(mapStateToProps, mapDispatchToProps)(ContentTable);

export default ContentTableContainer;
