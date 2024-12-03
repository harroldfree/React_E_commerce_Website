import React from 'react'
import PageHeader from '../Composants/PageHeader'
import { useState } from 'react'


const showResults = "Showing 01 - 09 of 210 Results"
import Data from "../products.json"
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
// import AllCategory from './AllCategory'


const Shop = () => {
  const [GridList, setGridList] = useState(true)
  const [products, setProducts] = useState(Data)
  console.log(products)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
//  fonction pour quitter d'un page a une autre

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  // // Filtre sur les catégories
  // const [selectedCategory, setSelectedCategory] = useState("All")
  // const menuItems = [...new Set(Data.map((val) => val.category))]

  // const filterItem = (curcat) => {
  //   const newItem = Data.filter((newVal) => {
  //     return newVal.category === curcat
  //   })
  //   setSelectedCategory(curcat)
  //   setProducts(newItem)
     
  // }

  return (
    <div>
       <PageHeader title="Our Shop Hfree page " curPage="Shop"/> 
       {/* Page de shopping */}
       <div className="shop-page padding-tb">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <article>
                  {/* layout and title here*/}
                  <div className="shop-title d-flex flex-wrap justify-content-between">
                    <p>{showResults}</p>
                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`} >
                      <a className='grid'onClick={() => setGridList(!GridList)}>
                        <i className='icofont-ghost'></i>
                      </a>
                      <a className='list'onClick={() => setGridList(!GridList)}>
                        <i className='icofont-listine-dots'></i>
                      </a>

                    </div>

                  </div>
                  {/* ProductsCards */}
                  <div className="c">
                    <ProductCards GridList={GridList} products={currentProducts} />
                  </div>

                  <Pagination 
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}

                  />
                </article>
              </div>
              <div className="col-lg-4 col-12">
                <aside>
                  
                  <Search  products={products} GridList={GridList}/>
                  {/* <AllCategory  
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                  /> */}
                </aside>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Shop