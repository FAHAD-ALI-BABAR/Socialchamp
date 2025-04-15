import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Component/Navbar/Navbar'
import Login from './Component/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact_sales from './Pages/Contact_sales'
import Loginpage from './Pages/Loginpage'
import Registeration from './Pages/Registeration'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Contact_sales/>}/>
    <Route path='/login' element={<Loginpage/>}/>
    <Route path='/register' element={<Registeration/>}/>

    </Routes>
    </BrowserRouter>

   
      
      {/* <Login/> */}
    </>
  )
}

export default App
