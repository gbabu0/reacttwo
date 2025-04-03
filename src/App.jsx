import { Fragment, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text text-info'>Hello Coding</h1>
    <button type="button" className='btn btn-primary'>Button Bi </button>
    </>
  )
}

export default App
