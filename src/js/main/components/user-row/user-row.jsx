import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import './user-row.scss';

export default class UserRow extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className="user-row">
                <ListItem
                    style={{ borderRadius: 10 }}
                    leftAvatar={<Avatar src={this.props.avatar} />}
                    insetChildren
                    primaryText={this.props.name}
                />
            </div>
        );
    }
}
