import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import './user-row.scss';

export default class UserRow extends React.PureComponent {
    static propTypes = {
        changePortalVisibility: PropTypes.func.isRequired,
        startFetchRepos: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    };

    openPortal = () => {
        this.props.changePortalVisibility();
        this.props.startFetchRepos(this.props.name);
    }

    render() {
        return (
            <div className="user-row">
                <ListItem
                    style={{ borderRadius: 10 }}
                    leftAvatar={<Avatar src={this.props.avatar} />}
                    insetChildren
                    primaryText={this.props.name}
                    onClick={this.openPortal}
                />
            </div>
        );
    }
}
