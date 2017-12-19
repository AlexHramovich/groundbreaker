import React from 'react';
import PropTypes from 'prop-types';

import UserRow from 'main/components/user-row/user-row';

import './content-table.scss';

export default class ContentTable extends React.PureComponent {
    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            login: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            repos: PropTypes.string.isRequired,
        })),
    };

    static defaultProps = {
        users: null,
    };

    render() {
        const content = this.props.users
            ? this.props.users.map(user => (
                <UserRow avatar={user.avatar} name={user.login} key={user.id} />
            ))
            : null;

        return (
            <div className="content-table">
                {this.props.users[0] ? (
                    <div className="content-table_header">
                        <span className="content-table_column-caption">Users:</span>
                    </div>
                ) : null}

                {content}
            </div>
        );
    }
}
