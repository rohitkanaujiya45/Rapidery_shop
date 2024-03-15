import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './page/home/Home';
import Cart from './page/cart/Cart';
import Dashboard from './page/admin/dashboard/Dashboard';
import NoPage from './page/nopage/NoPage';
import MyState from "./context/data/myState";
import Login from './page/registration/Login';
import Signup from './page/registration/Signup';
import ProductInfo from './page/productInfo/ProductInfo';
import AddProduct from './page/admin/pages/AddProduct';
import UpdateProduct from './page/admin/pages/UpdateProduct';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './page/allProducts/AllProducts';
import Order from './page/order/Order';
import About from './page/About/about';
import Contact from './page/Contact/contact';
import Return from './page/Return/return';
import Privacy from './page/Privacy/privacy';
import { Food_Main } from './components/RestaurantPage/Food_Main';
import { Food_Detail } from './components/RestaurantPage/Food_Detail';

function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/order" element={
           <ProtectedRoutes>
           <Order />
         </ProtectedRoutes>
        } />
        
        <Route path="/about" element={
           <ProtectedRoutes>
           <About />
         </ProtectedRoutes>
        } />
        
        <Route path="/:food/:id" element={
           <ProtectedRoutes>
           <Food_Detail />
         </ProtectedRoutes>
        } />
        <Route path="/restaurants" element={
           <ProtectedRoutes>
           <Food_Main />
         </ProtectedRoutes>
        } />
        <Route path="/privacy" element={
           <ProtectedRoutes>
           <Privacy />
         </ProtectedRoutes>
        } />
        <Route path="/contact" element={
           <ProtectedRoutes>
           <Contact />
         </ProtectedRoutes>
        } />

        <Route path="/return" element={
           <ProtectedRoutes>
           <Return />
         </ProtectedRoutes>
        } />


        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
        } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/addproduct" element={
          <ProtectedRoutesForAdmin>
            <AddProduct />
          </ProtectedRoutesForAdmin>
          } />
          
          <Route path="/updateProduct" element={
          <ProtectedRoutesForAdmin>
            <UpdateProduct />
          </ProtectedRoutesForAdmin>
          } />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}



export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'rohitkanaujiya4006@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}