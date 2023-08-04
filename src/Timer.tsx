import React, {useState, useEffect} from 'react'

interface InitialTime
{
    initialTime: number;
    isRunning: boolean;
    reset:boolean;
    breakL: number;
}


function Timer({initialTime, isRunning, reset, breakL}:InitialTime) {
    const [currentTime, setCurrentTime] = useState(initialTime*60);
    //const [h,m] = initialTime.split(":");
    const[count, setCount]= useState(0);
    useEffect(()=>
    {
        if(reset)
        {
            setCurrentTime(initialTime*60)
            reset=false;
        }else
        {
            setCurrentTime(initialTime*60)
        }
    }, [initialTime,reset, breakL])


    useEffect(()=> 
    {
        let interval:number;

        if(isRunning && currentTime>0)
        {
            interval = setInterval(()=>
            {
                setCurrentTime((prev)=> prev - 1);
                setCount((prev)=> prev+1);
            }, 1);

        }

        return () => clearInterval(interval)
    },[currentTime , isRunning, breakL])
    
    const minutes = Math.floor(currentTime/60);
    const seconds = currentTime %60;

  return (
    <h2>{minutes<10 ? '0' + minutes : minutes}:{seconds<10 ? '0' + seconds : seconds}</h2>

  )
}

export default Timer
