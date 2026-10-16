import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const Useeffect = () => {

const [count,setCount]=useState(0)
alert("render on every page")

const handleclick=()=>{
    setCount(count+1);

}



  return (
    <div>
      <button onClick={handleclick}>click</button><Br/>
      count is:{count}
    </div>
  )
}

export default Useeffect
