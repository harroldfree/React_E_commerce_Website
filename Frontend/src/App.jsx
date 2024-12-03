

import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Shop from './Shop/Shop.jsx';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Contact from './Contact/Contact.jsx';
import About from './About/About.jsx';
import Accueil from './Accueil.jsx';
import Connexion from './Pages/Connexion.jsx'
import Blog from './Blog/Blog.jsx';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/connexion' element={<Connexion/>}/>
        
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/inscription' element={<LoginSignup/>}/>
      
      </Routes>
      </BrowserRouter>
       {/* <Route path='/shoes' element={<Womens banner={shoes_banner}category="shoes"/>}/> */}
      
    </>
  )
}

export default App
