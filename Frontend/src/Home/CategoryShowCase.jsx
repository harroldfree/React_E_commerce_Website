import React, { useState } from 'react'
import Ratting from './Ratting';
import { Link } from 'react-router-dom';

const title = "Our Products";

const ProductData = [
{
imgUrl: 'src/assets/images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
new_price: '$199.00',
old_price:'$215.00',
id: 1,
},
{
imgUrl: 'src/assets/images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
new_price: '$199.00',
old_price:'$215.00',

id: 2,
},
{
imgUrl: 'src/assets/images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
new_price: '$199.00',
old_price:'$215.00',
id: 3,
},
{
imgUrl: 'src/assets/images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
new_price: '$199.00',
old_price:'$215.00',
id: 4,
},
{
imgUrl: 'src/assets/images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
new_price: '$199.00',
old_price:'$215.00',
id: 5,
},
{
imgUrl: 'src/assets/images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
new_price: '$199.00',
old_price:'$215.00',
id: 6,
},
{
imgUrl: 'src/assets/images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
new_price: '$199.00',
old_price:'$215.00',
id: 7,
},
{
imgUrl: 'src/assets/images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
new_price: '$199.00',
old_price:'$215.00',
id: 8,
},
]

const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData)
    // filtrage
    const filterItem = (categItem) =>{
        const updateItems = ProductData.filter((curElem) => {
           return curElem.cate === categItem 
        })
        setItems(updateItems)
    }
  return (
    <div className='course-section style-3 padding-tb'>
        <div className="course-shape one"><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
        <div className="course-shape one"><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
        {/* main section */}
        <div className="container">
            {/* section main */}
            <div className="section-header">
                <h2 className='title'>{title}</h2>
                <div className="course-filter-group">
                    <ul className='lab-ul'>
                        <li onClick={() => setItems(ProductData)}>All</li>
                        <li onClick={() => filterItem("Shoes")}>Shoes</li>
                        <li onClick={() => filterItem("Bags")}>Bags</li>
                        <li onClick={() => filterItem("Phones")}>Phones</li>
                        <li onClick={() => filterItem("Beauty")}>Beauty</li>
                        <li onClick={() => filterItem("Motors")}>Motors</li>

                    </ul>
                </div>
            </div>
            {/* section body */}
            <div className="sectio-wrapper">
                <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter ">
                    {
                        items.map((product) => <div key={product.id} className='col'>
                            <div className="course-item-inner">
                                <div className="course-thumb">
                                    <img src={product.imgUrl} alt="" />
                                    <div className="course-category">
                                        <div className="course-cate">
                                            <a href="#">{product.cate}</a>
                                        </div>
                                        <div className="course-reiew">
                                         <Ratting/> 
                                        </div>

                                    </div>
                                    {/* content */}
                                    <div className="course-content">
                                        <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                                        <div className="course-footer">
                                            <div className="course-author">
                                                <Link to="/" className='ca-name'>{product.brand}</Link> 
                                            </div>

                                            <div className="course-price">
                                                <h6 className=''> {product.new_price}</h6> 
                                                <h6>{product.old_price}</h6>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryShowCase