
import React from 'react'

import PageHeader from '../Composants/PageHeader'
import Sponsor from '../Home/Sponsor'
import Footer from '../Composants/Footer/Footer'
import BlogPostWithImage from './BlogPostWithImage.jsx'
import BlogostWithImage from './BlogostWithImage.jsx'
import NavItems from '../Composants/NavItems.jsx'

const Blogs = () => {
  return (
    <div>
        <NavItems/>
        <PageHeader title="Blog" curPage="Blogs"/>
        <BlogostWithImage />
        <BlogPostWithImage/>
        <Sponsor />
        <Footer />
    </div>
  )
}

export default Blogs
