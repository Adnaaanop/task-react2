import axios from 'axios'
import React, { useState,useEffect } from 'react'

const useFetch=(url) => {
    const [data,setData]=useState(null)

    useEffect(() => {
      axios.get(url)
      .then((res)=>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log("Failed to fetcth"+err)
      })
    
      
    }, [url])
    
  return {data}
}

export default useFetch