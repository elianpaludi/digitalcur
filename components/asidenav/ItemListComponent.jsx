import React from 'react'
import Aside from './Asidenav.module.scss'
import Link from 'next/link'

const ItemListComponent = ({svg, name, fill, viewbox, f}) => {
  return (
    <div className={Aside.container_items}>
        <svg width="19" height="21" viewBox={viewbox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={svg} fill={fill}/>
        </svg>
            <a className={f}><Link href="#">{name}</Link></a>
        </div>
  )

  // #484848
}

export default ItemListComponent