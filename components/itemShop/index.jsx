import React from 'react'
import Item from './ItemShop.module.scss' 

const index = ({item_name, item_category, item_membership, item_price, item_image}) => {
  return (
    <div className={Item.container}>
        <img className={Item.image} src={item_image}></img>
        <h1>{item_name}</h1>
        <h2>{item_category}</h2>
        <h4>{item_membership}</h4>
        <h6>{item_price}</h6>
    </div>
  )
}

export default index