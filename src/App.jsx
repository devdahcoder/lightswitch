import { useState } from 'react'
import './App.css'

function App() {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <div onClick={handleClick} className="switch--container">
        <div className="switch--display">

          <div className={toggle ? "switch--top--container--on" : "switch--top--container"}>
            
            <div className="switch--top--display">
              
              <div className="switch--mode">
                <div className="switch--mode--text">
                  <span>{toggle ? "ON" : "OFF"}</span>
                </div>
              

                <div className="switch--indicator">
                </div>
              </div>

            </div>
          </div>

          <div className={toggle ? "switch--bottom--on" : "switch--bottom"}>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
