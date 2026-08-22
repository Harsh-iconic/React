import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0)
  function increaseValue(){
    setNum(Num+1);
  }
  function decreaseValue(){
    setNum(Num-1);
  }
  function jump5(){
    setNum(Num+5);
  }
  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <button onClick={jump5}>jump</button>
    </div>
  )
}

export default App
