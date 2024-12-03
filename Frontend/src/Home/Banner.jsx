import React, { useState } from 'react'
import productData from "../products.json"
import { list } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SelectedCategory from '../Composants/SelectedCategory'

const titre = 
    <h3>Search Your One from Thousand <br/>of <span>Products</span></h3>

const desc = "we have the largest collection of products"
const bannerList  = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anuything Online",
    },
]

const Banner = () => {
    const [searchInput, setSearchInput] = useState("")
    const [filteredProducts, setFilterProducts] = useState(productData)
    // console.log(productData)
    //  Fonction de recherche 
    const handleSearch = e => {
        console.log(e.target.value)
        const searchTerm = e.target.value
        setSearchInput(searchTerm)


        //  Filtrage des produits sur la barre de recherche
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) )

        setFilterProducts(filtered)

    }
  return (
    <div className='banner-section style-4'>
        <div className="container">
            <div className="banner-content">
                {titre}
                <form >
                    <SelectedCategory select={"all"} />
                    <input type="text" name='search' id="search" placeholder='Search your product' value={searchInput} onChange={handleSearch}/>
                    <button type='submit'>
                        <i className='icofont-search'></i>
                    </button>
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>
                    {
                        searchInput && filteredProducts.map((product, i) => <li key={i}>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </li>)
                    }

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner