import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactForm from './ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ContactForm/>      
    </>
  )
}

export default App
