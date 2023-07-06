import React, { Component } from 'react';
import axios from 'axios';
class AdminUsers extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      users:[]
    }
  }
  componentDidMount()
  {
    var self = this;
    axios({
      method: 'get',
      url:'https://theeasylearnacademy.com/shop/ws/users.php',
      responseType:'json'
    }).then(function(response){
      console.log(response.data);
      var error = response.data[0].error;
      if(error!=="no")
       alert(error);
      else
      {
        var total = response.data[1].total;
        console.log(error,total);
        if(total==0)
          alert('no users found');
        else
       {
          response.data.splice(0,2);
          console.log(response.data);
          self.setState({
            users:response.data
          });
       }
      }
    });
  }
    render()
    {
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">User Management</div>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Users</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="8%">Sr No</th>
                      <th>Email</th>
                      <th width="40%">Mobile</th>
                      <th width="15%">View Orders</th>
                    </tr>
                    {this.state.users.map(function(user){
                      return (
                        <tr>
                      <td>1</td>
                      <td>pratik@gmail.com</td>
                      <td>1234567890</td>
                      <td>
                        <a href="#"><i className="fa fa-eye fa-2x" /></a>
                      </td>
                    </tr>
                      )
                    })}
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default AdminUsers