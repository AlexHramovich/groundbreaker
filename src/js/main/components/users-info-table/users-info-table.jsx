import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Table, TableRow, TableHeader, TableBody, TableHeaderColumn } from 'material-ui/Table';

import UsersInfoTableRow from 'main/components/users-info-table-row/users-info-table-row';

export default class UsersInfoTable extends React.PureComponent {
    static propTypes = {
        repos: PropTypes.instanceOf(List).isRequired,
    };

    render() {
        const content = this.props.repos.map(repo => (
            <UsersInfoTableRow
                name={repo.get('name')}
                description={repo.get('description')}
                issues={repo.get('issues')}
                key={repo.get('id')}
            />
        ));

        return (
            <Table height="200px">
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn style={{ textAlign: 'center' }}>
                            Repo Name
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{ textAlign: 'center' }}>
                            description
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{ textAlign: 'center' }}>
                            Number of issues
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>{content}</TableBody>
            </Table>
        );
    }
}
