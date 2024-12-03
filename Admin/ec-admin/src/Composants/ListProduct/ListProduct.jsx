import React from 'react'
import './ListProduct.css'
import { useState, useEffect } from 'react'
import cart_cross_icon from '../../assets/cart_cross_icon.png'

const ListProduct = () => {
    const [allproducts, setAllproducts] = useState([])

    const fetchInfo = async () => {
       await fetch('http://localhost:4000/allproducts')
       .then((res) => res.json())
       .then((data) => {setAllproducts(data)})
        
    }
    useEffect(() => {
        fetchInfo()
    }, [])

    const remove_product = async (id) => {
        await fetch(`http://localhost:4000/removeproduct`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
            }),
        })
        await fetchInfo()
        // .then((res) => res.json())
        // .then((data) => {
        //     if(data === "Product removed"){
              
        //     }
        // })
    }

  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
        <hr/>
        {allproducts.map((product,index) => {
           return <>
            <div key={index} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img src={cart_cross_icon} onClick={() =>{remove_product(product.id)}} className="listproduct-remove-icon"  alt="" />
              <p>{product.remove}</p>
         </div>
         <hr/>
         </>
            
             
               
})}
     </div>
    
  )
}

export default ListProduct
