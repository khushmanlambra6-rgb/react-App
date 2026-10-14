import React from 'react'
import { useState } from 'react'
const Assignment2 = () => {
  // const user = [
  //   {
  //     "id": 1,
  //     "name": "khushman",
  //     "email": "khushmanlambra@gmail.com"
  //   },
  //   {
  //     "id": 2,
  //     "name": "harman",
  //     "email": "harmanpreet@gmail.com"

  //   },
  //   {
  //     "id": 3,
  //     "name": "divyansh",
  //     "email": "divyansh@gmail.com"
  //   },
  //   {
  //     "id": 4,
  //     "name": "ganika",
  //     "email": "ganika@gmail.com"
  //   },
  //   {
  //     "id": 5,
  //     "name": "harjas",
  //     "email": "harjas@gmail.com"
  //   }
  // ]


  // ques3

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("")
  // const [error, setError] = useState("")


  // const handlesubmit = (e) => {
  //   e.preventDefault()
  //   if (!name || !email || !password || !confirmPassword) {
  //     setError("please fill all the requirements")
  //     return;
  //   }
  //   if (password.length < 6) {
  //     setError("password must be at least 6characters")
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setError("password do not match")
  //     return;
  //   }
  //   setError("");
  // }

  // ques4

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [phone, setPhone] = useState("")
  // const [subject, setSubject] = useState("")
  // const [message, setMessage] = useState("")
  // const [result, setResult] = useState("")
  // const [success, setSuccess] = useState("")

  // const handlesubmit = (e) => {
  //   e.preventDefault()
  //   if (!name || !email || !phone || !subject || !message) {
  //     setResult("all feild are required")
  //     return;
  //   }
  //   if (message.length < 10) {
  //     setResult("message must be at least 10 charavters")
  //     return;
  //   }
  //   setResult("")
  //   setSuccess("form submit")
  //   return;
  // }


  // ques5

const products=[
  {
    "id":1,
    "name":"addidas",
    "price":10000,
  },

  {
    "id":2,
    "name":"redtape",
    "price":3000,
  },

  {
    "id":3,
    "name":"nike",
    "price":12000,
  },

  {
    "id":4,
    "name":"h&m",
    "price":6000,
  
  },

   {
    "id":5,
    "name":"tommy",
    "price":16000,
  
  },

   {
    "id":6,
    "name":"parada",
    "price":44000,
  
  },

   {
    "id":7,
    "name":"burberry",
    "price":44000,
  
  },

   {
    "id":8,
    "name":"uspolo",
    "price":2000,
  
  }
]



  return (
    <div>
      {/* {
          user.map((per)=>(
            <div key={per.id} style={{backgroundColor:"pink",height:"150px",width:"420px"}}>
              <h1>{per.email}</h1>
              <h1>{per.name}</h1>
            </div> 
        
          } */}

      {/* ques3 */}

      {/* <form onSubmit={handlesubmit}>
        <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type='password' placeholder='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {error && <p style={{ color: "red" }} >{error}</p>}
        <button type='submit'>submit</button>
      </form> */}

      {/* ques4 */}

      {/* <h2>contact form</h2>

      <form onSubmit={handlesubmit}>
        <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='text' placeholder='phonenumber' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type='text' placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
        <input type='text' placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)} />
        {result && <p style={{ color: "red" }}>{result}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type='submit'>submit</button>
      </form> */}



    </div>
  )

}
export default Assignment2
