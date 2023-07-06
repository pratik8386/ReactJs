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
        <div className='card-header text-bg-success'>
          <h3>Register</h3>
        </div>
        <div className='card-body'>
          <form>
            <div className='mb-3'>
              <input type='fist name' className='form-control' placeholder='First name' />
            </div>
            <div className='mb-3'>
              <input type='last name' className='form-control' placeholder='Last name' />
            </div>
            <div className='mb-3'>
              <input type='email' className='form-control' placeholder='Email' />
            </div>
            <div className='mb-3'>
              <input type='password' className='form-control' placeholder='Password' />
            </div>
            <div className='mb-3 text-end'>
              <input type='button' className='btn btn-success' value='Register' />&nbsp; <input type='Reset' className='btn btn-success' value='clear all' />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>)
root.render(output);
