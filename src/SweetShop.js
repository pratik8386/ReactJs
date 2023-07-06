import React from 'react';
class SweetShop extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("constructor is called...");
        //properties
        this.no = props.no;
        this.name = props.name;
        this.GulabJamun = 300;
        this.Rasgulla = 500;
        this.Jalebi = 250;
        this.Peda = 400;
        this.KajuKatli = 1000;
     //create state variable
     this.state = {
        gulabjamun : 0,
        rasgulla : 0,
        jalebi: 0,
        peda: 0,
        kajukatli: 0,
        total : 0,
      }
    }
      UpdateGulabJamun = () =>{
        console.log("update dish method is called");
        this.setState({
            dish: parseInt(this.state.gulabjamun) + 1
        },
        () =>{
            //this code will execute only after dish (state) updated
            this.setState({
                total:parseFloat(this.state.total) + this.GulabJamun,
            });
        });
        var output;
        output = (
            <div className='col-lg-3 mb-3'>
                <div className='card'>
                    <div className='card-header text-bg-primary'>
                        <div className='row'>
                            <div className='col-3'>
                                <h2 className='text-center'>{this.no}</h2>
                            </div>
                            <div className='col-9'>
                                <h5 className='text-end'>{this.name}</h5>
                                <h4 className='text-end'>&#8377; {this.state.total}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-12 d-grid'>
                                <button onClick={this.GulabJamun} className='btn btn-primary'>GulabJamun{this.state.GulabJamun}</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        )
        return output;
    }
}
export default SweetShop
