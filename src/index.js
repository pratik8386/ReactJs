import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminCategory from './AdminCategory';
import AdminEditCategory from './AdminEditCategory';
import AdminInsertCategory from './AdminInsertCategory';
import AdminProduct from './AdminProduct';
import AdminUsers from './AdminUsers'
import AdminOrders from './AdminOrders'
import AdminLogin from './AdminLogin'
import AdminChangePassword from './AdminChangePassword'
import AdminForgotPassword from './AdminForgotPassword'
import AdminInsertProduct from './AdminInsertProduct'
import AdminEditProduct from './AdminEditProduct'
import AdminOrderDetail from './AdminOrderDetail'
import Layout from './AdminLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/admin-home' element={<AdminHome />} />
                    <Route path='/admin-category' element={<AdminCategory />} />
                    <Route path='/admin-insert-category' element={<AdminInsertCategory />} />
                    <Route path='/admin-edit-category' element={<AdminEditCategory />} />
                    <Route path='/admin-product' element={<AdminProduct />} />
                    <Route path='/admin-insert-product' element={<AdminInsertProduct />} />
                    <Route path='/admin-edit-product/:productid' element={<AdminEditProduct />} />
                    <Route path='/admin-users' element={<AdminUsers />} />
                    <Route path='/admin-orders' element={<AdminOrders />} />
                    <Route path='/admin-orders-detail/:orderid' element={<AdminOrderDetail />} />
                    <Route path='/admin-login' element={<AdminLogin />} />
                    <Route path='/admin-change-password' element={<AdminChangePassword />} />
                    <Route path='/admin-forgot-password' element={<AdminForgotPassword />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
root.render(<MyRouter />);