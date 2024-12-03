import React from 'react'
import PageHeader from '../Composants/PageHeader'
import Sponsor from '../Home/Sponsor'
import Footer from '../Composants/Footer/Footer'
import NavItems from '../Composants/NavItems.jsx'

import Horizontal from './Horizontal.jsx'
import Horizonta from './Horizonta.jsx'

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
"Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
{
imgUrl: "/src/assets/images/icon/01.png",
imgAlt: "contact icon",
title: "Office Address",
desc: "1201 park street, Fifth Avenue",
},
{
imgUrl: "/src/assets/images/icon/02.png",
imgAlt: "contact icon",
title: "Phone number",
desc: "+22698 745 632,02 982 745",
},
{
imgUrl: "/src/assets/images/icon/03.png",
imgAlt: "contact icon",
title: "Send email",
desc: "admin@shopcart.com",
},
{
imgUrl: "/src/assets/images/icon/04.png",
imgAlt: "contact icon",
title: "Our website",
desc: "www.shopcart.com",
},
];

const Contact = () => {
  return (
    <div>
      <NavItems/>
      <PageHeader title="About" />
      <Horizontal/>
      <Horizonta/>
      <Sponsor />
      <Footer />
    </div>
  )
}

export default Contact