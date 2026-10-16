// import React from 'react'
import useCounter from '../hooks/useCounter'

const Counterscreen = () => {
    const{count,increment,decrement,reset}=useCounter()

  return (
    <div>
    <h1>this is screen for counter</h1>
   <h1>  {count} </h1>











   

<button onClick={increment}>ince</button>
<button onClick={decrement}>decre</button>
<button onClick={reset}>reset</button>
    </div>
  )
}

export default Counterscreen
