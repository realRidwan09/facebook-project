import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signinpage from './component/signinpage/Signinpage'
import Signuppage from './component/signuppage/Signuppage'


function App() {
  const [page, setPage] = useState(false)


  return (
    <>
      
      <div>
          <Signinpage  page={page} setPage={setPage} />
          {
            page ? <Signuppage  page={page} setPage={setPage} /> : ""
          }
      </div>
    

     

        
     
    </>
  )
}

export default App
