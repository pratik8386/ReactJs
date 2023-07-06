import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/courses' element={<Course />} />
                    <Route path='/contact' element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
root.render(<MyRouter />);