import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
var output =(<div className='container'>
  <div className='row'>
    <div className='col-6 offset-3'>
      <div className='card shadow'>
        <div className='card-header text-bg-info'>
          <h3>Change Password</h3>
        </div>
        <div className='card-body'>
          <form>
            <div className='mb-3'>
              <input type='password' className='form-control' placeholder='Current Password' />
            </div>
            <div className='mb-3'>
              <input type='password' className='form-control' placeholder='New Password' />
            </div>
            <div className='mb-3'>
              <input type='password' className='form-control' placeholder='Confrom New Password' />
            </div>
            <div className='mb-3 text-end'>
              <input type='button' className='btn btn-info' value='Save' />&nbsp; <input type='Reset' className='btn btn-info' value='clear all' />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>)
root.render(output);
