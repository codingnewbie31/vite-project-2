import React from 'react'
import Slider from '../components/home/slider'
import Handpicked from '../components/home/Handpicked'
import Categories from '../components/home/Categories'
import Banner from '../components/home/Banner'
import FlashSale from '../components/home/FlashSale'
import BannerFeatures from '../components/home/BannerFeatures'
import MostViewed from '../components/home/MostViewed'


const Home = () => {
  return (
    <div >
        <Slider/>
        <Handpicked/>
        <Categories/>
        <Banner />
        <FlashSale />
        <BannerFeatures />
        <MostViewed />
    </div>
  )
}

export default Home;
