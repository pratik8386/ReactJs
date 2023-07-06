import React, { Component } from 'react';
class AdminCategory extends Component
{
   constructor(props)
   {
      super(props);
      this.state = {
        categories : []
      };

   }
    componentDidMount()
    {
        console.log('componentDidMount called...');
        let url = 'https://theeasylearnacademy.com/shop/ws/category.php';
        fetch(url).then((response) => response.json()).then((json) =>
        {
            console.log(json);  
              /*
            [
              0 {"error":"no"},
              1{"total":3},
              2{"id":"71","title":"test","photo":"C:fakepathforgot_password.png"},
              3{"id":"54","title":"wubiwakiky@mailinator.com","photo":"undefined"},
              4{"id":"74","title":"new","photo":"undefined"}
            ] */
            var error = json[0]['error'];
            console.log(error);
            if(error !== "no") //means error
            {
                alert(error);
            }
            else 
            {
              var total = json[1]['total'];
              console.log(total);
              json.splice(0, 2); //1st argument position, 2nd argument no of items to be removed from json
              console.log('after removing item from array',json);
              this.setState({
                categories: json,
              });
            }
            
        });
    }

    DeleteCategory = (categoryid) => {
      console.log(categoryid);
      var url = "https://theeasylearnacademy.com/shop/ws/delete_category.php?id=" + categoryid;
      fetch(url).then(response => response.json()).then((data)=>{
        console.log(data);
        //[
          // 0 {"error":"no"},
          // 1 {"message":"category deleted"}
        //]
        var error = data[0]['error'];
        if(error!=='no')
         alert(error);
        else
        {
          var temp = this.state.categories.filter((category) => {
            if (category.id !=categoryid)
            return category
          });
          this.setState({
            categories:temp
          });
          alert(data[1]['message']);
        }
      });
    }
    render()
    {
      var self = this;
        return (<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">Category Management</div>
            <p className="text-end">
              <a href="/admin-insert-category" className="btn btn-primary">Add Category</a>
            </p>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Cateories</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="8%">Sr No</th>
                      <th>Title</th>
                      <th>Photo</th>
                      
                      <th width="8%">Edit</th>
                      <th width="8%">Delete</th>
                    </tr>
                    {this.state.categories.map(function(category){
                        return (<tr>
                          <td>{category['id']}</td>
                          <td>{category['title']}</td>
                          <td>
                            <img src="https://picsum.photos/100" className="img-fluid" />
                          </td>
                        
                          <td>
                            <a href="/admin-edit-category"><i className="fa fa-pencil fa-2x" /></a>
                          </td>
                          <td>
                            <button className='btn btn-danger' onClick={(e) => self.DeleteCategory(category['id'])}><i className="fa fa-trash fa-2x" /></button>
                          </td>
                        </tr>)
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
export default AdminCategory