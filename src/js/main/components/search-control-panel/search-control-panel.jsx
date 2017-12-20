import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

import { Waiter } from 'main/tools/waiter';

import './search-control-panel.scss';

export default class SearchControlPanel extends React.PureComponent {
    static propTypes = {
        fetchUsers: PropTypes.func.isRequired,
        resetApp: PropTypes.func.isRequired,
    };
    state = {
        searchString: '',
    };

    componentDidMount() {
        document.body.addEventListener('keydown', this.eventHandler);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.eventHandler);
    }

    waiter = Waiter(this.props.fetchUsers);

    eventHandler = (e) => {
        if (e.keyCode === 27) {
            this.props.resetApp();

            this.waiter.stop();

            this.setState({
                searchString: '',
            });
        }
    };

    handleUpdateInput = (e) => {
        this.setState({
            searchString: e.target.value,
        });

        if (e.target.value) {
            this.waiter.start(e.target.value);
        } else {
            this.waiter.stop();
        }
    };

    handleClick = () => this.props.fetchUsers(this.state.searchString);

    render() {
        return (
            <div className="search-control-panel">
                <span className="search-control-panel__caption">Github Browser</span>

                <TextField
                    value={this.state.searchString}
                    hintText="Enter github user name"
                    floatingLabelText="Search"
                    floatingLabelFixed
                    fullWidth
                    onChange={this.handleUpdateInput}
                />
            </div>
        );
    }
}
