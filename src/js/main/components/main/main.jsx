import React from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import ContentTableContainer from 'main/containers/content-table-container';
import UsersInfoContainer from 'main/containers/users-info-container';
import Portal from 'main/components/portals/portal';

import './main.scss';

export default class Main extends React.PureComponent {
    static propTypes = {
        fetchUsers: PropTypes.func.isRequired,
        isPortalOpen: PropTypes.bool.isRequired,
    };

    state = {
        dataSource: [],
    };

    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [value],
        });
    };

    render() {
        const style = {
            margin: 12,
        };

        return (
            <div className="content-wrapper">
                <MuiThemeProvider>
                    <div className="content-wrapper_controls">
                        <span className="content-wrapper_caption">Github Browser</span>

                        <AutoComplete
                            hintText="Enter github user name"
                            dataSource={this.state.dataSource}
                            onUpdateInput={this.handleUpdateInput}
                            fullWidth
                        />
                        <RaisedButton
                            label="Primary"
                            primary
                            style={style}
                            onClick={() => this.props.fetchUsers(this.state.dataSource[0])}
                        />
                    </div>

                    <ContentTableContainer />
                    {this.props.isPortalOpen ? (
                        <Portal>
                            <UsersInfoContainer />
                        </Portal>
                    ) : null}
                </MuiThemeProvider>
            </div>
        );
    }
}
