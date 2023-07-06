import React, { Component } from "react";
import axios from 'axios';
class AdminInsertProduct extends Component
{
  constructor(props)
  {
    super(props);
    this.state ={

    };
  }
  UpdateValue = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  ChangeFile = (e) => {
    console.log(e.target.files[0].name);
    this.setState({
      [e.target.name]:e.target.files[0],
    });
  }
  submitForm = (e) => {
    console.log('form submitted');
    console.log(this.state);
    var formdata = new FormData();
    //input : name,photo,price,stock,detail (required)
    formdata.append("name",this.state.name);
    formdata.append("filename",this.state.filename);
    formdata.append("price",this.state.price);
    formdata.append("stock",this.state.stock);
    formdata.append("detail",this.state.detail);

    axios({
      method:'post',
      url: 'https://www.theeasylearnacademy.com/shop/ws/insert_product.php',
      data : formdata,
      config : { headers:{'Constent-Type':'multipart/form-data'}}
    }).then((response)=>{
      console.log(response);
    });
    e.preventDefault();
  }
  render()
  {
    return (<div className="container">
    <div className="row mt-5">
      <div className="col-12">
        <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
      </div>
      <div className="card shadow">
        <div className="card-header text-bg-primary">
          <h3>Add New Product</h3>
        </div>
        <div className="card-body">
          <form action='' method="post" onSubmit={this.submitForm} encType='multipart/form-data'>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="title" placeholder="Product title" name="name" onChange={this.UpdateValue} />
                  <label htmlFor="title">Product title</label>
                </div>
              </div>
              <div className="col">
                <select className="form-select form-select-lg" aria-label="Large select" name="categoryid" onChange={this.UpdateValue}>
                  <option>Select</option>
                  <option>Laptop</option>
                  <option>Mobile</option>
                  <option>Camera</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="filename" className="form-label">Select Photo</label>
                <input className="form-control" type="file" id="filename" name="filename" accept="image/*" onChange={this.ChangeFile} />
              </div>
              <div className="col">
               <div className="form-floating mb-3 mt-3">
                  <input type="number" className="form-control" id="price" placeholder="Product price" name="price" onChange={this.UpdateValue} />
                  <label htmlFor="price">Price</label></div>
                </div>
              <div className="col">
                <div className="form-floating mb-3 mt-3">
                  <input type="number" className="form-control" id="stock" placeholder="Product price" name="stock" onChange={this.UpdateValue} />
                  <label htmlFor="stock">Stock</label>
                </div>
              </div>
              <div className="row">
                <div className="col-9">
                  <div className="form-floating">
                    <textarea onChange={this.UpdateValue} className="form-control" placeholder="Product description" id="detail" style={{"height":"100px"}} name="detail" defaultValue={""} />
                    <label htmlFor="detail">Detail</label>
                  </div>
                </div>
                <div className="col-3">
                  <div className="col pt-4">
                    <button type="submit" className="btn btn-primary w-100">Save</button>
                  </div>
                </div>
              </div>
            </div>
            <div/>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
  }
}
export default AdminInsertProduct