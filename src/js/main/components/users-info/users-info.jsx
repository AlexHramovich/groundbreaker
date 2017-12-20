import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import UsersInfoTable from 'main/components/users-info-table/users-info-table';
import FlatButton from 'material-ui/FlatButton';
import { RingLoader } from 'react-spinners';

import './users-info.scss';

export default class UsersInfo extends React.PureComponent {
    static propTypes = {
        changePortalVisibility: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        repos: PropTypes.instanceOf(List).isRequired,
        userName: PropTypes.string,
        avatar: PropTypes.string,
    };

    static defaultProps = {
        userName: '',
        avatar: '',
    };
    render() {
        return (
            <div className="users-info">
                {this.props.isLoading ? (
                    <RingLoader />
                ) : (
                    <div className="users-info__content">
                        <div className="users-info__header">
                            <span className="users-info__user-name">{this.props.userName}</span>
                            <div className="users-info__avatar">
                                <img src={this.props.avatar} alt={this.props.userName} />
                            </div>
                        </div>
                        <UsersInfoTable repos={this.props.repos} />
                        <FlatButton
                            style={{ color: 'white' }}
                            fullWidth
                            label="Close"
                            primary
                            onClick={this.props.changePortalVisibility}
                        />
                    </div>
                )}
            </div>
        );
    }
}
