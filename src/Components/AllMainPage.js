import React, { useState } from 'react'
import  Subnavbar  from './Subnavbar'
import { Navbar } from './Navbar'
import { Herosection } from './Herosection'
import { ProductSec } from './ProductSec'
import { FooterSection } from './FooterSection'

const AllMainPage = ({addToCart,cartitem,addWishList,wishlist,colorSorege,searchItem,colors}) => {


  return (
    <div>
        <Subnavbar></Subnavbar>
      <Navbar cartitem={cartitem} wishlist={wishlist} searchItem={searchItem}></Navbar>
      <Herosection></Herosection>
      <ProductSec addToCart={addToCart} addWishList={addWishList} colorSorege={colorSorege} colors= {colors}  ></ProductSec>
      <FooterSection></FooterSection>
      {/* <Subfoot></Subfoot> */}
    </div>
  )
}

export default AllMainPage