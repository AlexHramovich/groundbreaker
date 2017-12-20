import React from 'react';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';
import { TableRow, TableRowColumn } from 'material-ui/Table';

export default class UsersInfoTableRow extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string,
        description: PropTypes.string,
        issues: PropTypes.number,
    };

    static defaultProps = {
        issues: null,
        name: '',
        description: '',
    };

    render() {
        const style = {
            textAlign: 'center',
            whiteSpace: 'normal',
        };

        return (
            <TableRow style={style}>
                <TableRowColumn style={style}>{this.props.name}</TableRowColumn>
                <TableRowColumn style={style}>{this.props.description}</TableRowColumn>
                <TableRowColumn style={style}>
                    {this.props.issues !== null ? (
                        this.props.issues
                    ) : (
                        <PulseLoader color="#000" size={10} loading />
                    )}
                </TableRowColumn>
            </TableRow>
        );
    }
}
