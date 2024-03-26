import { useEffect } from "react";
import { useState } from "react";

const CustomHook = () => {
  const [books , setBooks]= useState([])
  useEffect(()=>{
   fetch('bookData.json')
   .then(res => res.json())
   .then(data =>  setBooks(data))
  },[])
  return {books}
};

export default CustomHook;