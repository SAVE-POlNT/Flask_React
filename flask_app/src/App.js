import './App.css';
import React,{useState,useEffect} from 'react';
function App() {
  const [currentTime,setCurrentTime]= useState("");
  const [secCurrentTime, setSecCurrentTime] = useState(0);
  useEffect(()=>{
    fetch('/time').then(res=>res.json()).then(data=>{
        setCurrentTime(data.time);
      setSecCurrentTime(data.secTime);
      
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Current Time : {currentTime}
        </p>
        <br/>
          <p>
          Current Time in seconds : {secCurrentTime}
          </p>

      </header>
    </div>
  );
}

export default App;
