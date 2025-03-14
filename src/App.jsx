import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold text-center text-blue-600">
      Tailwind CSS is working!
    </h1>
    <p className="text-center mt-2 text-gray-700">
      This is a simple example of Tailwind CSS in action.
    </p>
  </div>
  )
}

export default App
