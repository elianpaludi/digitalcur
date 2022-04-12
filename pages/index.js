import Head from 'next/head'
import Image from 'next/image'
import AsideNav from '../components/asidenav/Index'
import Navbar from '../components/navbar/Index'
import Header from '../components/index/HeaderComponent'
import ItemShop from '../components/ItemShop/index'
export default function Home() {
  return (
    <>
<Navbar></Navbar>
<AsideNav></AsideNav>

<div className="container_home">
    <Header></Header>
  <section className="container_sells">
    <ItemShop
    item_image='./img/item_game_1.png'
    item_name='Farcry 6'
    item_category='Physical game'
    item_price='$100'
    item_membership='$55'
    />
    <ItemShop
    item_image='./img/item_game_1.png'
    item_name='Farcry 6'
    item_category='Physical game'
    item_price='$100'
    item_membership='$55'
    />
    <ItemShop
    item_image='./img/item_game_1.png'
    item_name='Farcry 6'
    item_category='Physical game'
    item_price='$100'
    item_membership='$55'
    />
    <ItemShop
    item_image='./img/item_game_1.png'
    item_name='Farcry 6'
    item_category='Physical game'
    item_price='$100'
    item_membership='$55'
    />
    <ItemShop
    item_image='./img/item_game_1.png'
    item_name='Farcry 6'
    item_category='Physical game'
    item_price='$100'
    item_membership='$55'
    />
    </section>
</div>
    </>


  )
}
