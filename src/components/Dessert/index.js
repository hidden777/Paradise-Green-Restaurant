import React from 'react'
import Layout from '../../Layout';
import Products from '../Products'
import { productDataFour } from '../Products/data';

const Dessert = () => {
  return (
    <>
    <Layout/>
    <Products heading='The Dessert you Deserve' data={productDataFour}/>
    </>
  )
}

export default Dessert;