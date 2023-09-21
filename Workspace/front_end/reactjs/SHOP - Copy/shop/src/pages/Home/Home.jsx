import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <Categories />
            <FeaturedProducts type='featured' />
            <FeaturedProducts type='treding' />
            <Contact />
            {/* <FeaturedProducts type='trending' /> */}
        </div>
    )
}

export default Home