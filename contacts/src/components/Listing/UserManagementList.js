import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {Link, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import styles from "../LeftMenu/styles";

class UserManagementList extends Component {

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

    openVideo = (username) => {
        this.props.history.push('/test-video/' + username)
    }

    // user = row
    actionFormatter = (cell, user) => {

        // we should check if user is active or not (for the moment we presume all are active)
        return (
            <div>
                <React.Fragment>
                    <Link to={"#"}
                          onClick={() => this.openVideo(user.name)}
                    >
                        Video
                    </Link>
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
            <div>
                <span> Lista de medici inregistrati </span>

                <BootstrapTable data={this.state.users}
                                border={false}
                                height='120'
                                scrollTop={'Bottom'}
                                pagination
                                search>
                    <TableHeaderColumn dataField='id'
                                       isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='cmi'>CMI</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Nume / Prenume</TableHeaderColumn>
                    <TableHeaderColumn dataField='address'>Adresa</TableHeaderColumn>
                    <TableHeaderColumn dataField='phone'>Telefon</TableHeaderColumn>
                    <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='department'>Departament</TableHeaderColumn>
                    <TableHeaderColumn dataField='actions'
                                       dataFormat={this.actionFormatter}>Actiuni</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles, {withTheme: true}),
    withRouter,
)(UserManagementList);

// UserManagementList.propTypes = {
// users: PropTypes.array,
// showVideo: PropTypes.func.isRequired,
// }