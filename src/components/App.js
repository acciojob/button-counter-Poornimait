
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count,updateCount] = useState(0)

  const handleClick = () =>{
    updateCount(count+1);
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
