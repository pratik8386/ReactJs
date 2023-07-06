import React, { Component } from 'react';
import axios from 'axios';
class AdminOrders extends Component
{
   constructor(props)
   {
    super(props);
    this.state = {
      orders: []
    }
   }
   componentDidMount()
   {
    var self =  this;
    axios({
      method: 'get',
      url: 'https://theeasylearnacademy.com/shop/ws/orders.php',
      responseType:'json'
    }).then(function(response){
       console.log(response.data);
       var error = response.data[0]['error'];
       console.log('error',error);
       if(error !== "no")
         alert(error)
       else
       {
        var total = response.data[1]['total'];
        if (total === 0)
         alert('no orders found');
        else
        {
          response.data.splice(0,2);
          self.response.data({
            orders:response.data
          });
        }
       }
    });
   }
    render()
    {
        return (<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">User Management</div>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Orders</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="8%">Sr No</th>
                      <th width="40%">Customer Detail</th>
                      <th width={10}>Date</th>
                      <th width={10}>Amount</th>
                      <th width={10}>Status</th>
                      <th width="15%">View Detail</th>
                    </tr>
                    {this.state.orders.map(function(order){
                      return <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>
                        {order.fullname}  <br />
                        {order.address1} <br />
                        {order.address2} <br />
                        {order.city} - {order.pincode} 
                      </td>
                      <td>01-01-2023</td>
                      <td>{order.amount}</td>
                      <td>Confirmed</td>
                      <td>
                        <a href={"/admin-orders-detail/"+ order.id}>
                          <i className="fa fa-eye fa-2x" />
                        </a>
                      </td>
                    </tr>
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
export default AdminOrders