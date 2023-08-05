import { useEffect, useState } from 'react'
import './App.css'
import Timer from './Timer'

function App() {
  const [timer, setTimer] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const [isRunning, setIsRunning] = useState(false);
  const [reset,setReset] = useState(false);
  
  useEffect(() => {
    if (reset) {
      setTimeout(()=>{
        setReset(false);
      })
    }
  }, [reset]);
  
  return (
    <div>
      <h2> 25 + 5 Clock</h2>
      <div>
        <h3 id="break-label">Break Length</h3>
        <button id="break-decrement" onClick={()=> isRunning==false && breakLength>1? setBreakLength((prev)=> prev-1):null}>-</button>
        <span id='break-length'>{breakLength}</span>
        <button id='break-increment' onClick={()=> isRunning==false && breakLength<60?setBreakLength((prev)=> prev + 1):null}>+</button>
        <h3 id="session-label">Session Length</h3>
        <button id="session-decrement" onClick={()=>isRunning==false && timer>1?setTimer((prev) => prev - 1) :null}>-</button>
        <span id='session-length'>{timer}</span>
        <button id='session-increment' onClick={()=>isRunning==false && timer<60?setTimer((prev) => prev+1):null}>+</button>

        {/* <h3>Session</h3> */}
        <Timer initialTime={timer} isRunning={isRunning} reset={reset} breakL={breakLength}></Timer>

        <button id='start_stop' onClick={() => {setIsRunning(!isRunning);setReset(false)}}>play/stop</button>
        <button id='reset' onClick={()=> {setIsRunning(false); setTimer(25); setReset(true); setBreakLength(5);}}>reset</button>
      </div>
    </div>
  )
}

export default App
