import React from 'react'
import './Sidebar.css'
import { Link } from'react-router-dom'
// import add_product_icon from 'add_product_icon.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
      <div className='sidebar-item'>
        <img className='log' src='../src/assets/add_product_icon.svg' alt="" />
        <p>Add Product</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
      <div className='sidebar-item'>
        <img className='log' src='../src/assets/files-stack.svg' alt="" />
        <p>Product List</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
