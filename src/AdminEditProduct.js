import React, { Component } from 'react';
import axios from 'axios';
class AdminEditProduct extends Component
{
    constructor(props)
    {
      super(props);
      this.state = {
        title: '',
        categoryid: '',
        photo: '',
        price: '',
        stock: '',
        detail: '',
        productid: '',
      }
    }
    componentDidMount()
    {
        console.log('componentDidMount method is called');
        var self = this;
        axios({
          method: 'get',
          url: 'https://www.theeasylearnacademy.com/shop/ws/product.php?productid=48',
          responseType: 'json'
        }).then(function (response) {
            console.log(response.data);
            var error = response.data[0]['error'];
            if(error !== 'no')
              alert(error);
            else 
            {
              var total = response.data[1]['total'];
              if(total === 0)
                alert('no product found');
              else 
                {
                   self.setState({
                      name : response.data[2]['title'],
                      detail : response.data[2]['detail'],
                      filename : response.data[2]['photo'],
                      stock : response.data[2]['stock'],
                      price : response.data[2]['price'],
                      categoryid : response.data[2]['categoryid'],
                      productid : response.data[2]['id'],
                   });
                }
            }
        });
    }
    UpdateValue = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      });

    }
    ChangeFile = (e) => {
      console.log(e.target.files[0].name);
      this.setState({
          [e.target.name]:e.target.files[0],
      });
    }
    UpdateProduct = (e) => {
        console.log(this.state);
        var url = "https://www.theeasylearnacademy.com/shop/ws/update_product.php";
        var formData = new FormData();
        formData.append("name",this.state.name);
        formData.append("filename",this.state.filename);
        formData.append("price",this.state.price);
        formData.append("stock",this.state.stock);
        formData.append("detail",this.state.detail);
        formData.append("productid",this.state.productid);

       
        axios({
          url: url,
          method:'post',
          data: formData,
          responseType: 'json',
          config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then((response) =>{
          console.log(response.data);
        })
        e.preventDefault();
    }
    render()
    {
        return(
            <div className="container">
  <div className="row mt-5">
    <div className="col-12">
      <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
      <div className="card shadow">
        <div className="card-header text-bg-primary">
          <h3>Edit product</h3>
        </div>
        <div className="card-body">
          <form method='post' onSubmit={this.UpdateProduct} encType='multipart/form-data'>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Product title" name="name" value={this.state.name} onChange={this.UpdateValue}  />
                  <label htmlFor="name">Edit product title</label>
                </div>
              </div>
              <div className="col">
                <select className="form-select form-select-lg" aria-label="Large select" name="categoryid">
                  <option>Select</option>
                  <option>Laptop</option>
                  <option>Mobile</option>
                  <option>Camera</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="filename" className="form-label">Change Photo</label>
                <input className="form-control" type="file" id="filename" name="filename" accept="image/*" onChange={this.ChangeFile}  />
                <p><img src={"https://theeasylearnacademy.com/shop/images/product/" + this.state.photo} className='img-fluid' /></p>
              </div>
              <div className="col">
                <div className="form-floating mb-3 mt-3">
                  <input type="number" className="form-control" id="price" placeholder="Product price" name="price" value={this.state.price}
                  onChange={this.UpdateValue} />
                  <label htmlFor="price">Edit price</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3 mt-3">
                  <input type="number" className="form-control" id="stock" placeholder="Product stock" name="stock" value={this.state.stock} onChange={this.UpdateValue} />
                  <label htmlFor="stock">Edit stock</label>
                </div>
              </div>
              <div className="row">
                <div className="col-9">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Product description" id="detail" style={{"height":"100px"}} name="detail" defaultValue={this.state.detail} onChange={this.UpdateValue} />
                    <label htmlFor="detail">Edit detail</label>
                  </div>
                </div>
                <div className="col-3">
                  <div className="col pt-4">
                    <button type="submit" className="btn btn-primary w-100">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>);
    }
}
export default AdminEditProduct;