import React, { useState } from 'react'

function useToggle() {
  let initialValue = false
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

const {isToggled, toggle} = useToggle()

const App = () => {
  return (
    <div>
      <h1>Custom Hook</h1>
      <button onClick={toggle}>Toggle</button>
      <p>{isToggled ? 'ON' : 'OFF'}</p>
    </div>
  )
}

export default App
