// import React from 'react'

// const AllCategory = (filterItem, setItem, menuItems, setProducts, selectedCategory) => {
//   return (
//         <>
//              <div className='widget-header'>
//                 <h5 className='ms-2'> All Categories </h5>
//             </div>
//             <div className="w">
//                 <button className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}>All</button>
//                 {
//                     menuItems.map((val, id) => {
//                         return(
//                             <button 
//                             className={`m-2 ${selectedCategory === "val" ? "bg-warning" : ""}`} 
//                             key={id}
//                             onClick={() => filterItem(val)}
//                             >{val}
//                             </button>
//                         )
//                     })
//                 }
//             </div>
//         </>
//   )
  
// }

// export default AllCategory