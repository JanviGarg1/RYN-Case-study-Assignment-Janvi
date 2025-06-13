import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Expertise from '../components/Expertise';
import Works from '../components/Works';
import Experience from '../components/Experience';
import Blogs from '../components/Blogs';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BrandingAndFooter from '../components/BrandingAndFooter';
const Home = ()=>{
    return(
        <>
          <Navbar/>
          <HeroSection/>
          <Expertise/>
          <Works/>
          <Experience/>
          <Blogs/>
          <Testimonial/>
          <Faq/>
          <BrandingAndFooter/>
        </>
    )
}
export default Home