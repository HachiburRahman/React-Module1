import { Suspense } from 'react'

import './App.css'
import Bottles from './Components/Bottles/Bottles'

function App() {
  const bottlesPromise=fetch("./bottles.json")
  .then(res=>res.json())
  

  return (
    <>
    <h1>My Awesome Bottles Are Here</h1>
    <Suspense fallback={<p>Bottles are loading...</p>}>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
    </Suspense>

     
    </>
  )
}

export default App
