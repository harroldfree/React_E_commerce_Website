import React from 'react';
import PageHeader from '../Composants/PageHeader'
import Sponsor from '../Home/Sponsor'
import Footer from '../Composants/Footer/Footer'
import NavItems from '../Composants/NavItems.jsx'
import SocialProfileWithImage from './SocialProfileWithImage.jsx';
import SocialrofileWithImage from './SocialrofileWithImage.jsx';
import SocialProfileithImage from './SocialProfileithImage.jsx';
import SocialProfileithImag from './SocialProfileithImag.jsx';


const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "30+";
const expareance = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: '/src/assets/images/about/icon/01.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Skilled Instructors',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: '/src/assets/images/about/icon/02.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Get Certificate',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: '/src/assets/images/about/icon/03.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Online Classes',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
];

const About = () => {
  return (
    <div>
        <NavItems/>
        <PageHeader title="About" />
        <SocialProfileWithImage />
        <SocialrofileWithImage />
        <SocialProfileithImage/>
        <SocialProfileithImag />
        <Sponsor />
        <Footer />
    </div>
  );
};

export default About;
