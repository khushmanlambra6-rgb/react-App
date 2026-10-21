import { useEffect, useState } from 'react'

const Assignment3 = () => {
    // useEffect(() => {
    //     console.log("component loaded")
    // }, [])

    // // ques2

    // const [count, setCount] = useState(0)
    // const handleinc = () => {
    //     setCount(count + 1)
    // }
    // const handledec = () => {
    //     setCount(count - 1)
    // }

    // useEffect(() => {
    //     console.log(count)
    // }, [count])


    // // ques3

    // const [showMessage, setShowMessage] = useState(true)
    // const btn = () => {
    //     setShowMessage(!showMessage)
    // }

    // useEffect(() => {
    //     if (showMessage) {
    //         console.log("message is visible")


    //     } else {
    //         console.log("message hide")
    //     }

    // }, [])


    // // ques4


    // const [name, setName] = useState("")

    // const changename = () => {
    //     if (name) {
    //         setName("")
    //     }
    // }

    // useEffect(() => {
    //     console.log("heloooo guyzzzzzzzzzz")
    // }, [name])


    // ques5

    // const [color, setColor] = useState("white")
    // const firstchange = () => {
    //     setColor("red")
    // }

    // const secondchange = () => {
    //     setColor("blue")
    // }

    // const thirdchange = () => {
    //     setColor("brown")
    // }

    // useEffect(() => {

    // }, [color])


    // ques6

    // const [timer, setTimer] = useState(0)
    // useEffect(() => {
    //   const id=  setInterval(() => {
    //         setTimer(timer+1)
    //     }, 1000);

    //   return()=>clearInterval(id);
    // },[timer])



    // ques7

//   const [digitalClock,setDigitalClock]=useState(new Date())

//   useEffect(()=>{
//     const timer=setInterval(()=>{
//         setDigitalClock(new Date())
//     },1000)
//     return()=>clearInterval(timer)
//   },[])


//    ques8


//   const [timer, setTimer] = useState(0)

//     useEffect(() => {
//       const id=  setInterval(() => {
//             setTimer(timer+1)
//         }, 1000);

//       return()=>clearInterval(id);
//     },[timer])



    // ques9

      

   




    return (
        <div>
             {/* <h1>use effect</h1> */}

             {/* ques2  */}
            {/* <h1>{count}</h1>
            <button onClick={handleinc}>inc</button>
            <button onClick={handledec}>dec</button> */}

            {/* ques3 */}

            {/* <button onClick={btn}>{showMessage ? "show" : "Hide"}</button> */}

            {/* ques4 */}

            {/* <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <h1>{name}</h1>
            <button onClick={changename}>show</button> */}


            {/* ques5 */}

            {/* <div style={{ height: 150, width: 150, backgroundColor: color }}> */}

            {/* </div>

            <button onClick={firstchange}>red</button>
            <button onClick={secondchange}>blue</button>
            <button onClick={thirdchange}>brown</button>  */}
{/*     
          ques6 */}


          {/* <h2>Timer:{timer}</h2> */}
            

            {/* ques7 */}

            {/* <h1>{digitalClock.getHours()}</h1>
            <h1>{digitalClock.getMinutes()}</h1>
            <h1>{digitalClock.getSeconds()}</h1> */}


            {/* ques8 */}


            {/* <h1>{timer}</h1>
            <button onClick={()=> setTimer(0)}>reset</button> */}
           
        </div>
    )
}

export default Assignment3
