import { filter } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = ({products, GridList}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className='widget widget-search'>
        <form className='search-wrapper mb-3'>
            <input type="text" name="search" id="search" placeholder="Search..." defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button type='submit' className='btn btn-primary'>
                <i className='icofont-search-2'></i>
            </button>
        </form>


        <div className="">
            {
                searchTerm && filteredProducts.map((product) => (
                    <Link key={product.id} to={`/shop/${product.id}`}>
                        <div className="d-flex g-3 p-2">
                            <div className="pro-thumb h-25">
                                <img src={product.img} alt="" width={70} className='flex-{grow|shrink}-0'/>
                            </div>

                            <div className="product-content">
                                <p>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </p>
                                <div className='p d-flex justify-content-around ' width={70}>
                                    <h6>
                                    ${product.newPrice}
                                    </h6>
                                    <h6>
                                    ${product.oldPrice}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Search