// import React from 'react'
import { useState } from 'react'
const Formhandling = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const submit = (e) => {
    e.preventDefault()
    if (!name || !email || !password) {
      alert("please fill the required details")
    }


  }
  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Formhandling
