import React from 'react'
import Layout from '../../Layout';
import Products from '../Products';
import { productDataFive, productDataSix } from '../Products/data';

const FullCourse = () => {
  return (
    <>
        <Layout />
        <Products heading="Full course Meal is the full blown deal!" data={productDataFive} />
        <Products heading="Add Ons" data={productDataSix} />
    </>
  )
}

export default FullCourse;