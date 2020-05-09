import React, {Component} from 'react'

import PropTypes from 'prop-types'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

export default class UserManagementList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            // mocked users
            // will be taken from props
            users: [
                {"id": 1, "name": "Test"},
                {"id": 2, "name": "Test2"},
                {"id": 3, "name": "Test3"}
            ],
        }
    }

    // user = row
    actionFormatter = (cell, user) => {

        return (
            <div>
                <React.Fragment>

                </React.Fragment>
            </div>
        )
    }

    render() {

        if (this.state.users && this.state.length === 0) {
            return (
                <div>
                    <span> Lista de medici inregistrati</span>
                    <div> Nu exista medici</div>
                </div>
            )
        }

        return (
            <div className={"list-hostess data-listing"}>
                <span> Lista de medici inregistrati </span>

                <BootstrapTable data={this.state.users}
                                border={false}
                                height='120'
                                scrollTop={'Bottom'}
                                search>
                    <TableHeaderColumn dataField='id'
                                       isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Nume / Prenume</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

UserManagementList.propTypes = {
    users: PropTypes.array,
}