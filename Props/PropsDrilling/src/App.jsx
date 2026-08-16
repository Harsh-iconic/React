import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='harsh' age={22} img='https://www.bornfree.org.uk/wp-content/uploads/2023/09/Web-image-iStock-492611032.jpg'/>
      <Card user='aaditya' age={21} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzKbOasvDW73PAnCGl8zX0VQJN8tSlL9SdcwtDyb2DducrVorv9PC-Xo&s=10'/>
      <Card user='krishna' age={23} img='https://www.bornfree.org.uk/wp-content/uploads/2023/09/Web-image-iStock-492611032.jpg'/>
    </div>
  )
}

export default App
