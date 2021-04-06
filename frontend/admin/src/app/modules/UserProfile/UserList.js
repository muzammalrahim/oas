import React, { Component } from "react";
import { del, list } from "../../pages/helper/api";

export default class UserList extends Component {
  state = {
    users: [],
  };

  getUser = () => {
    list("user/").then((response) => {
      // console.log(response.data.results)
      this.setState({ users: response.data.results });
    });
    };
    handleDelete = (id) => {
        del(`user/${id}/`).then(response => {
            this.getUser()
        }).catch(error => {
            console.log(error)
       })
    }
  componentDidMount() {
    this.getUser();
  }

  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <div className="mt-5 bg-white">
        <table className="table ">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              {/* <th>Status</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr>
                  {console.log(user.is_superuser)}
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  {/* <td>{user?.is_superuser}</td> */}
                  <td onClick={()=>this.handleDelete(user.id)}>delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
