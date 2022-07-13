import React from 'react'
import Layout from '../../Layout';
import Products from '../Products'
import {productDataThree} from '../Products/data';

const Starters = () => {
  return (
    <>
    <Layout/>
    <Products heading='The Dessert you Deserve' data={productDataThree}/>
    </>
  )
}

export default Starters