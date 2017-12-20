import React from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ContentTableContainer from 'main/containers/content-table-container';
import SearchControlPanel from 'main/components/search-control-panel/search-control-panel';

import './main.scss';

export default class Main extends React.PureComponent {
    static propTypes = {
        fetchUsers: PropTypes.func.isRequired,
        resetApp: PropTypes.func.isRequired,
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="content-wrapper">
                    <SearchControlPanel
                        fetchUsers={this.props.fetchUsers}
                        resetApp={this.props.resetApp}
                    />
                    <ContentTableContainer />
                </div>
            </MuiThemeProvider>
        );
    }
}
