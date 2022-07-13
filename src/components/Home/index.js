import React from 'react'
import { productData, productDataTwo } from '../Products/data';
import Feature from '../Feature'
import Products from '../Products'
import Layout from '../../Layout';
import Loader from 'react-loaders';

const Home = () => {
  return (
    <>
        <Layout imgUrl={"/restaurant-app/src/images/restaurant-hero.jpg"}/>
        <Products heading='Choose your favourite' data={productData}/>
        <Feature />
        <Products heading='Sweet Treats for you!' data={productDataTwo}/>
        <Loader type='pacman' />
    </>
  )
}

export default Home