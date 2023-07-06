import React, { Component } from 'react';
import axios from 'axios';
class AdminOrderDetail extends Component
{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      fullname : '',
      address1 : '',
      address2 : '',
      city : '',
      pincode: '',
      amount : '',
    }
  }
  componentDidMount(){
    var url = new URL(window.location.href);
    var CurrentPage = url.href;
    var orderid = CurrentPage.substr(CurrentPage.length-1);
    console.log(orderid);
    var apiurl = `https://theeasylearnacadaemy.com/shop/ws/orders.php?id=${orderid}`
    var self =  this;
    axios({
      method: 'get',
      url: apiurl,
      responseType: 'json'
    }).then(function(response){
      console.log(response.data);
      var error = response.data[0]['error'];
      if(error!=='no')
        alert(error);
      else
      {
        var total = response.data[1]['total'];
        if(total==0)
          alert('no order found');
        else
        {
          response.data.splice(0,2);
          console.log(response.data);
          self.setState({
            fullname:response.data[0]['fullname'],
            address1:response.data[0]['address1'],
            address2:response.data[0]['address2'],
            city:response.data[0]['city'],
            pincode:response.data[0]['pincode'],
            amount:response.data[0]['amount'],
          });
        }
      }
    });
  }
    render()
    {
        return(
            <div className="container">
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
              </tr>
              <tr>
                <td>1</td>
                <td>
                  {this.state.fullname}<br />
                  {this.state.address1}<br />
                  {this.state.address2}<br />
                  {this.state.city} - {this.state.pincode}
                </td>
                <td>01-01-2023</td>
                <td>25000</td>
                <td>Confirmed</td>
              </tr>
            </tbody></table>
          <h3>Order Detail</h3>
          <hr />
          <table className="table table-striped table-bordered">
            <tbody><tr>
                <td>No</td>
                <td>Name</td>
                <td>Photo</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
              <tr>
                <td>1</td>
                <td>IPhone - 14</td>
                <td>
                  <img src="https://picsum.photos/100" alt />
                </td>
                <td>135000</td>
                <td>2</td>
                <td>2700000</td>
              </tr>
              <tr>
                <td colSpan={5}>
                  Change order status
                </td>
                <td>
                  <select className="form-select mb-2">
                    <option value={1}>Confirm</option>
                    <option value={2}>Dispatched</option>
                    <option value={3}>Delivered</option>
                    <option value={4}>Cancel</option>
                  </select>
                  <input type="submit" defaultValue="Change status" className="btn btn-primary w-100" />
                </td>
              </tr>
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}
export default AdminOrderDetail;