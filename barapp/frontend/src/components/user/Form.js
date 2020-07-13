import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addUser} from '../../actions/users'


export class Create extends Component {
    state = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        is_admin: false,
        is_employee: true,        
    }

    static propTypes = {
        addUser:PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    
    onSubmit = e =>{
        e.preventDefault();
        const { first_name, last_name, username,email,password,is_admin,is_employee} = this.state;
        const user= { first_name, last_name, username,email,password,is_admin,is_employee};
        this.props.addUser(user)
        this.setState({
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            is_admin: false,
            is_employee: true, 
        })

        console.log('submit')

    };


    render() {
        const { first_name, last_name, username,email,password,is_admin,is_employee} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="first_name"
                            onChange={this.onChange}
                            value={first_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellido</label>
                        <input
                            className="form-control"
                            type="text"
                            name="last_name"
                            onChange={this.onChange}
                            value={last_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre de Usuario</label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={this.onChange}
                            value={username}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Clave</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={this.onChange}
                            value={password}
                        />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-4">
                                <label>Admin</label>
                                <input
                                    className="form-control"
                                    type="checkbox"
                                    name="is_admin"
                                    onChange={this.onChange}
                                    value={is_admin}
                                />
                            </div>
                            <div className="col-4">
                                <label>Empleado</label>
                                <input
                                    className="form-control"
                                    type="checkbox"
                                    name="is_employee"
                                    onChange={this.onChange}
                                    value={is_employee}
                                />
                            </div>                            
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
            </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addUser})(Create)
