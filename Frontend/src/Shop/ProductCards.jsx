import React from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../Home/Ratting'

const ProductCards = ({GridList, products}) => {
    // console.log(products)
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList? "grid" : "list"}`}>
        {
            products.map((product, i) => (
                <div key={i} className='col-lg-4 col-md-6 col-12'>
                    <div className='product-item'>
                        <div className='product-thumb'>
                            <div className="pro-thumb">
                                <img src={product.img} alt="" />
                            </div>
                            {/* Product action links */}
                            <div className="product-action-link">
                                <Link to={`/shop ${product.id}`}><i className='icofont-eye'></i></Link>
                                <a href="#">
                                <i className='icofont-heart'></i>  
                                </a>
                                <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                            </div>
                        </div>

                        {/* Product  content*/}
                        <div className="product-content">
                           <h5>
                           <Link to={`/shop ${product.id}`}>{product.name}</Link>
                           </h5>
                           <p className='productRating'>
                                <Ratting />
                           </p>
                           <div className='p d-flex justify-content-between'>
                                <h6> ${product.newPrice}</h6>
                                <h6> ${product.oldPrice}</h6>
                           </div>
                        </div>
                    </div>
                    {/* List */}
                    <div className='product-list-item'>
                        <div className='product-thumb'>
                            <div className="pro-thumb">
                                <img src={product.img} alt="" />
                            </div>
                            {/* Product action links */}
                            <div className="product-action-link">
                                <Link to={`/shop ${product.id}`}><i className='icofont-eye'></i></Link>
                                <a href="#">
                                <i className='icofont-heart'></i>  
                                </a>
                                <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                            </div>
                        </div>

                        {/* Product  content*/}
                        <div className="product-content">
                           <h5>
                           <Link to={`/shop ${product.id}`}>{product.name}</Link>
                           </h5>
                           <p className='productRating'>
                                <Ratting />
                           </p>
                           <div className='p d-flex justify-content-between'>
                                <h6> ${product.newPrice}</h6>
                                <h6> ${product.oldPrice}</h6>
                           </div>
                        </div>
                    </div>
                </div>
                
            ))
        }
    </div>
  )
}

export default ProductCards