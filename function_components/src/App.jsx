import { useState } from "react"


// export default  function App(){
//   return(
//     <>
//     <h2>Welcome..!!</h2>
//     <p>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).</p>
//     </>
//   )
// }
// export default App



// export default function App(){
//   const [input,setInput]=useState('')
//   const handleInput = (e) =>{
//     setInput(e.target.value)
//   }
//   return(
//     <>
//     <form action="">
//       <input type="text" name="demo" id="demo" value={input} onChange={handleInput}/>
//     </form>
//     {input}
//     </>
//   )
// }



export default function App(){
  const[list,setList]=useState([])
  const[input,setInput]=useState({name:'',age:''})

  const handleSubmit=(e)=>{
    e.preventDefault()
    setList((prv)=>([...prv,input]))
    setInput({name:'',age:''})
  }

  const handleInput=(e) =>{
    console.log(e.target);
    const {name,value}=e.target
    setInput((prv)=>({...prv,[name]:value}))
    console.log(input);

  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" placeholder="name" value={input.name} onChange={handleInput}/>
      <input type="number" name="age" id="age" placeholder="age" value={input.age} onChange={handleInput}/>
      <input type="submit" value="Add" />
    </form>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {list.map((value,index)=>(
          <tr key={index}>
            <td>{value.name}</td>
            <td>{value.age}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </>
  )
}



