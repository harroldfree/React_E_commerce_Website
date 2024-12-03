import React from 'react'
import './Admin.css'
import Sidebar from '../../Composants/Sidebar/Sidebar'
import { Routes, Route } from'react-router-dom'
import AddProduct from '../../Composants/AddProduct/AddProduct'
import ListProduct from '../../Composants/ListProduct/ListProduct'



const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/listproduct' element={<ListProduct/>} />
      </Routes>
    </div>
  )
}

export default Admin
