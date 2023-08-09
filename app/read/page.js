"use client"
import { DataContext } from '@/context';
import React, { useContext } from 'react'
import { useState } from 'react';



const read = () => {
  const [One, setOne] = useContext(DataContext);

  
  let listrender = <p>Loading...</p> 
  if(One.length > 0){
    listrender = One.map((d , i)=>{
      return(
        <div className="row">
<div key={i} className="card">
  <img src={d.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{d.author}</h5>
    <p className="card-text">{d.title}</p>
    <a href={d.url} class="btn btn-primary">Read More</a>
  </div>
</div>
</div>
      )
    })
  }
  const handlePageClick = () =>{
    setPage(e.selected + 1);

  }
  return (
    <div className='one' >
      {listrender}
    </div>
  )
}

export default read;