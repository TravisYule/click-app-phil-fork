import { useState } from 'react'

function App() {
  const [isClicked, setIsClicked] = useState(false)
  
  return (
    <div>
      <div style={{ 
        backgroundColor: 'orange', 
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <p style={{
          fontFamily: '"Comic Sans MS", cursive',
          fontSize: '25px',
          marginBottom: '20px'
        }}>
          Click if you are tryin to fuck Phil
        </p>
        <button onClick={() => setIsClicked(true)}>
          {isClicked ? 'Clicked' : 'Click'}
        </button>
      </div>
    </div>
  )
}

export default App
