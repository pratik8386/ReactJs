import React from 'react';
import ReactDOM from 'react-dom/client';
import MyTable from './MyTable';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Resturant()
{
  return (
    <div className='container'>
      <div className='row'>
        <MyTable no='1' name='Divyesh Mehta' dish='0' />
        <MyTable no='2' name='Bhargav Mehta' dish='0' />
        <MyTable no='3' name='Sneh Gosai' dish='0' />
        <MyTable no='4' name='Dishant Joshi' dish='0' />
        <MyTable no='5' name='Piyush Joshi' dish='0' />
        <MyTable no='6' name='Keval Dave' dish='0' />
        <MyTable no='7' name='Aditay Pandit' dish='0' />
        <MyTable no='8' name='Pratik' dish='0' />
      </div> 
    </div>
  );
}
root.render(<Resturant />);