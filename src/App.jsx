import { useState } from 'react'

function App() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div>
      <button onClick={() => setIsClicked(true)}>
        {isClicked ? 'Clicked' : 'Click'}
      </button>
    </div>
  )
}

export default App