import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom';





const subTitle = "Choose Any Products";
const titre = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: 'src/assets/images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-wifi-alt',
titre: 'DSLR Camera',
},
{
imgUrl: 'src/assets/images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-wifi-alt',
titre: 'Shoes',
},
{
imgUrl: 'src/assets/images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-wifi-alt',
titre: 'Photography',
},
{
imgUrl: 'src/assets/images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-wifi-alt',
titre: 'Formal Dress',
},
{
imgUrl: 'src/assets/images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-wifi-alt',
titre: 'Colorful Bags',
},
{
imgUrl: 'src/assets/images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-wifi-alt',
titre: 'Home Decor',
},

]
const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
        <div className="container">
            {/* l'entete de section */}
            <div className="section-header text-center">
                <span className='subtitle'>{subTitle}</span>
                <h2 className='.navbar-brand'>{titre}</h2>
            </div>
            {/* Section du chariot */}
            <div className="section-wrapper">
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val,i) => (<div key={i} className='col'>
                            <Link to= "/shop" className='category-item'>
                            <div className='category-inner'>
                                {/* image thumbnail */}
                                <div className="category-thumb">
                                <img src={val.imgUrl} alt="" />

                                </div>
                                {/* content */}
                                <div className="category-content">
                                    <div className="cate-icon">
                                     <i className={val.iconName}>
                                        
                                        </i>   
                                    </div>
                                    <Link to="/shop" className='tite'><h5>{val.titre}</h5>
                                    </Link>
                                </div>
                            </div>
                            </Link>

                        </div>))
                    }
                </div>
                {/* bouton de commencement */}
                <div className="text-center mt-5">
                    <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default HomeCategory