import React from 'react';
import PropTypes from 'prop-types';

import './users-info-table-row.scss';

export default class UsersInfoTableRow extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        issues: PropTypes.string,
    }

    static defaultProps = {
        issues: '',
    }

    render() {
        return (
            <div className="users-info-table-row">
                <div className="users-info-table-row_repo-name">{this.props.name}</div>
                <div className="users-info-table-row_description">{this.props.description}</div>
                <div className="users-info-table-row_issues">{this.props.issues}</div>
            </div>
        );
    }
}
