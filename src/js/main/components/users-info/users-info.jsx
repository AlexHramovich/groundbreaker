import React from 'react';
import PropTypes from 'prop-types';
import UsersInfoTable from 'main/components/users-info-table/users-info-table';

import './users-info.scss';

export default class UsersInfo extends React.PureComponent {
    static propTypes = {
        repos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
        })).isRequired,
        userName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }
    render() {
        return (
            <div className="users-info">
                <div className="users-info_content">
                    <div className="users-info_header">
                        <span className="users-info_user-name">
                            {this.props.userName}
                        </span>
                        <div className="users-info_avatar">
                            <img src={this.props.avatar} alt={this.props.userName} />
                        </div>
                    </div>
                    <UsersInfoTable repos={this.props.repos} />
                </div>
            </div>
        );
    }
}
