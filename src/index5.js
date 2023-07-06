import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
let CurrentDateTime = function()
{
  let now = new Date();
  var output = (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-12'>
          <div className='text-center display-1'>{now.toLocaleDateString()}</div>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12'>
          <div className='text-center display-3'>{now.toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  )
  return output;
}
let RefreshDateTime = function(){
  root.render(CurrentDateTime());
}
setInterval(RefreshDateTime,1000)
