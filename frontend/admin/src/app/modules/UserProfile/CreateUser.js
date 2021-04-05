import React, { Component } from 'react'

export default class CreateUser extends Component {
    state = {
        first_name : '',
        last_name : '',
        password : '',
        email: '',
        isSuperUser : true
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" />
                </div>
            </form>
        )
    }
}
