import React from "react";
import ReactDOM  from 'react-dom/client';
class Picture extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            first:props.first,
            second:props.second,
            isFirst:false,
            source:props.first
        }
    }
    changePicture = () =>{
        if(this.state.isFirst==false)
        {
            this.setState({
                source : this.state.second
            })
        }
        else
        {
            this.setState({
                source : this.state.first
            })
        }
        this.setState({
            isFirst: !this.state.isFirst
        });
    }
    render()
    {
        var output = <div className="col-lg-3">
            <div className="card shadow">
                <img src={this.state.source} className='img-fluid img-thumbnail' onClick={this.changePicture} />
            </div>
        </div>;

        return output;
    }
}
function Album()
{
    return(
        <div className="container">
            <div className="row mt-5">
                <Picture first="gun1.jpg" second="gun5.jpg" />

                <Picture first="pistol.jpg" second="sniper.jpg" />

                <Picture first="shotgun1.jpg" second="shotgun2.jpg" />

                <Picture first="gun6.jpg" second="gun4.jpg" />
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Album/>);