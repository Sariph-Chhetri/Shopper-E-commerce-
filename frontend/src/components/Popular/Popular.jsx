import React, { useEffect, useState } from 'react'
import Item from '../item/Item'
import "../Popular/Popular.css"
import axios from "axios"

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  const fetchPopularProducts = async() =>{

    await axios.get( process.env.REACT_APP_SERVER + "/api/popular")
    .then(({data:{popularInWomen}}) =>{
      setPopularProducts(popularInWomen)
    })
    .catch(err=>console.log(err))
    return null;
  }
  useEffect(()=>{
    fetchPopularProducts();
  },[]) 

  return (
    <div id='popular' className='popular'>
        <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular_item">
      {popularProducts.map((item , index)=>{
        return <Item key={index} image = {item.image} item_name={item.name} new_price={item.new_price} old_price={item.old_price} id={item._id} rating={item.rating} slug={item.slug} />
      })}
      </div>
    </div>
  )
}

export default Popular
