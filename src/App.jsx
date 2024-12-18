import { useState } from 'react'
function App() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div>
      <div style={{ 
        backgroundColor: 'orange',
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <button onClick={() => setIsClicked(true)}>
          {isClicked ? 'Clicked' : 'Click'}
        </button>
      </div>
    </div>
  )
}
export default App
