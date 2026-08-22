
import React, { useState } from 'react'

const App = () => {
  // const [Num, setNum] = useState({user:'harsh', age:20})
  // const btnClick = ()=>{
  //   const newNum = {...Num}
  //   newNum.user = 'Mohit'
  //   newNum.age = 22
  //   setNum(newNum)
  // }

  const [num, setnum] = useState(10)

  const btnClicked = ()=>{
      setnum(prev => (prev + 1));
      setnum(prev => (prev + 1));
      setnum(prev => (prev + 1));
      setnum(prev => (prev + 1));
  }

  return (
    // <div>
    //   <h1>{Num.user}, {Num.age}</h1>
    //   <button onClick={btnClick}>click</button>
    // </div>
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
