import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import UserRow from 'main/components/user-row/user-row';
import Portal from 'main/components/portals/portal';
import UsersInfoContainer from 'main/containers/users-info-container';

import './content-table.scss';

export default class ContentTable extends React.PureComponent {
    static propTypes = {
        startFetchRepos: PropTypes.func.isRequired,
        users: PropTypes.instanceOf(List),
    };

    static defaultProps = {
        users: null,
    };

    state = {
        isPortalOpen: false,
    };

    componentDidMount() {
        document.body.addEventListener('keydown', this.closePortal);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.closePortal);
    }

    closePortal = (e) => {
        if (e.keyCode === 27) {
            this.setState({
                isPortalOpen: false,
            });
        }
    };

    changePortalVisibility = () => {
        this.setState({
            isPortalOpen: !this.state.isPortalOpen,
        });
    };

    render() {
        const content = this.props.users
            ? this.props.users.map(user => (
                <UserRow
                    avatar={user.get('avatar')}
                    name={user.get('login')}
                    key={user.get('id')}
                    startFetchRepos={this.props.startFetchRepos}
                    changePortalVisibility={this.changePortalVisibility}
                />
            ))
            : null;

        return (
            <div className="content-table">
                {this.props.users.size > 0 ? (
                    <div className="content-table__header">
                        <span className="content-table__column-caption">Users:</span>
                    </div>
                ) : null}

                {content}

                {this.state.isPortalOpen && (
                    <Portal>
                        <UsersInfoContainer changePortalVisibility={this.changePortalVisibility} />
                    </Portal>
                )}
            </div>
        );
    }
}
