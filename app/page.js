"use client"
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { DataContext } from '@/context';
import axios from 'axios';

const page = () => {
  const router = useRouter();

  const [Info, setInfo] = useContext(DataContext);

  const ReadHandler = async () =>{
 
 const {data} = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-07-24&to=2023-07-24&sortBy=popularity&pageSize=9&apiKey=3a7f9943a9bd446a923a09e8a5536855`);
 setInfo(data.articles);

    router.push("/read");

  }
  const WriteHandler = () =>{
    router.push("/write");
  }
  const OurBlogsHandler = () =>{
router.push("/my");

  }
  return (
    <div className='whole' >
      <div className="box">
      <h1>React Based  Blog Application</h1>
      <h3>"Being your true self is the most effective formula for success in Blogging"</h3>
    </div>
 <div className="container">
  <div className="buttonz">
  <button onClick={ReadHandler} className='btn btn-primary m-4' >Read Blogs</button>
  <button  onClick={WriteHandler}  className='btn btn-warning m-4' >Write Blogs</button>
  </div>
 </div>
    </div>
  )
}

export default page
