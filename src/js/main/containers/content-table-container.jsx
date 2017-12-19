import { connect } from 'react-redux';

import ContentTable from 'main/components/content-table/content-table';

const mapStateToProps = state => ({
    users: state.users.get('users').toJS(),
});

const mapDispatchToProps = dispatch => ({});

const ContentTableContainer = connect(mapStateToProps, mapDispatchToProps)(ContentTable);

export default ContentTableContainer;
