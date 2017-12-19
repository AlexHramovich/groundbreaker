import React from 'react';
import PropTypes from 'prop-types';

import UsersInfoTableRow from 'main/components/users-info-table-row/users-info-table-row';

import './users-info-table.scss';

export default class UsersInfoTable extends React.PureComponent {
    static propTypes = {
        repos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
        })).isRequired,
    }

    render() {
        const content = this.props.repos.map(repo => (
            <UsersInfoTableRow name={repo.name} description={repo.description} key={repo.id} />
        ));

        return (
            <div className="users-info-table">
                <div className="users-info-table_header">
                    <div className="users-info-table_repo-name">Repo Name</div>
                    <div className="users-info-table_description">description</div>
                    <div className="users-info-table_issues">Number of issues</div>
                </div>
                <div className="users-info-table_content">
                    {content}
                </div>
            </div>
        );
    }
}
