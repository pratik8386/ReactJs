import React, { Component } from 'react';
import axios from 'axios';
class AdminInsertCategory extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {

    }
  }
  SaveCategory = (event) => {
    console.log('Form saved...');
    console.log(this.state);
    let formData = new FormData();
    formData.append("title",this.state.title);
    formData.append("photo",this.state.photo);
    formData.append("islive",this.state.islive);

    axios({
      method: 'post',
      url:'https://theeasylearnacademy.com/shop/ws/insert_category.php',
      data: formData,
      config: {headers:{'Content-Type':'multipart/form-data'}}
    }).then((response) => {
      console.log(response);
    });
     event.preventDefault();
  }
     updateValue = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
     
  }
    render()
    {
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">Category Management</div>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Add new category</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.SaveCategory} action='' method='post' encType='multipart/form-data'>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="title" placeholder="Category title" name="title" onChange={this.updateValue} />
                    <label htmlFor="title">Category title</label>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="photo" className="form-label">Select Photo</label>
                      <input className="form-control" type="file" id="photo" name="photo" accept="image/*" onChange={this.updateValue} />
                    </div>
                    <div className="col">
                      <p><b>is this category Live?</b></p>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="yes" defaultChecked value='1' onChange={this.updateValue} />
                        <label className="form-check-label" htmlFor="yes">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="no" value='0' onChange={this.updateValue} />
                        <label className="form-check-label" htmlFor="no">No</label>
                      </div>
                    </div>
                    <div className="col pt-4 d">
                      <button type="submit" className="btn btn-primary w-100">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
}
export default AdminInsertCategory