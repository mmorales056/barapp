import React, { Component, Fragment } from 'react';
import {withAlert} from 'react-alert';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


export class Alerts extends Component {
    static propTypes ={
        error:PropTypes.object.isRequired,
        message:PropTypes.object.isRequired

    }
    componentDidUpdate(prevProps){
        const {error, alert, message} = this.props;
        if(error !== prevProps.error){
            if(error.msg.username) alert.error('el nombre de usuario es requerido');
            if(error.msg.password) alert.error('la clave es obligatoria');
        }
        if(message !== prevProps.message){
            if(message.deleteUser) alert.success(message.deleteUser);
            if(message.addUser) alert.success(message.addUser);
        }
    }
    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));