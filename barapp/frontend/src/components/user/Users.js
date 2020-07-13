import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getUsers,deleteUser} from "../../actions/users";

export class Users extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        return (
            <Fragment>
                <h1> Users</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                {user.is_admin ?
                                    <td>Administrador</td>
                                    : user.is_employee ? <td>Empleado</td>
                                        : <td>CLiente</td>}
                                <td>
                                    <button onClick={this.props.deleteUser.bind
                                        (this, user.id)}
                                        className="btn btn-danger btn-sm">
                                        {" "}Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateTopProps = state => ({
    users: state.users.users
});


export default connect(mapStateTopProps, { getUsers,deleteUser})(Users);
