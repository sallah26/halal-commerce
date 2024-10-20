import React from 'react'
import Category from './category/Category'
import FeauterdProducts from './feautered/FeauterdProducts'
import NewProducts from './new-arrivals/NewProducts'
import Discount from './discount/Discount'
import Features from './feauter/Features'
import Subscribe from './subscribe/Subscribe'

export default function Landing() {
  return (
    <div className="flex mb-14 w-screen max-w-[1380px] items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center p-4">
        <Category />
        <FeauterdProducts />
        <NewProducts />
        <Discount />
        <Features />
        <Subscribe />
      </div>
      </div>
  )
}
