// import React, {useState, useEffect, useRef} from 'react'

// interface InitialTime
// {
//     initialTime: number;
//     isRunning: boolean;
//     reset:boolean;
//     breakL: number;
//     onReset:() => void;
// }


// function Timer({initialTime, isRunning, reset, breakL, onReset}:InitialTime) {
//     const [currentTime, setCurrentTime] = useState(initialTime*60);
//     const [currentBreak, setCurrentBreak] = useState(breakL*60);
//     const [timeLabel, setTimeLabel] = useState("Session");
//     const audioRef = useRef<HTMLAudioElement>(null);
//     //const [reset1,setReset] = useState(reset);
//     //const audioRunning = useRef(false);
//     //const [h,m] = initialTime.split(":");
//     //const[count, setCount]= useState(0);
//     useEffect(()=>
//     {
//         if(reset)
//         {
//             setCurrentTime(initialTime*60)
//             setTimeLabel("Session")
//             setCurrentBreak(breakL*60);
//             if(audioRef.current)
//             {
//                 audioRef.current.pause();
//                 audioRef.current.currentTime=0;
//             }
//             onReset();
//         }else
//         {
//             setCurrentTime(initialTime*60)
//             setCurrentBreak(breakL*60);
//         }
//     }, [initialTime,reset, breakL])


//     useEffect(()=> 
//     {
//         let interval:number;

//         if(isRunning)
//         {
//             //let temp = true;
//             if(currentTime>-1)
//             {
//                 interval = setInterval(()=>
//                 {
//                     setCurrentTime((prev)=> prev - 1);
//                     //setCount((prev)=> prev+1);
//                 }, 1000);
//                 if (!isRunning) {
//                     clearInterval(interval);
//                 }
        
//             } 
            
//             // if(currentTime ==-1 && currentBreak>0 && audioRef.current)
//             // {
//             //     setTimeLabel("Break");
//             //     setCurrentTime(currentBreak);
//             //     setCurrentBreak(-1);

//             //     audioRef.current?.play();

//             // }
//             // else if(currentTime==-1 && currentBreak==-1 && audioRef.current)
//             // {
//             //     //console.log("klk");
//             //     setTimeLabel("Session");
//             //     setCurrentTime(initialTime*60);
//             //     setCurrentBreak(breakL*60);
//             //     audioRef.current?.play();

//             // }
//         }
//         return () => clearInterval(interval)
//     },[currentTime , isRunning, currentBreak])
    
//     useEffect(() => {
//         if (currentTime === -1 && currentBreak > 0 && audioRef.current) {
//           setTimeLabel("Break");
//           setCurrentTime(currentBreak);
//           setCurrentBreak(-1);
    
//           audioRef.current?.play();
//         } else if (currentTime === -1 && currentBreak === -1 && audioRef.current) {
//           setTimeLabel("Session");
//           setCurrentTime(initialTime * 60);
//           setCurrentBreak(breakL * 60);
    
//           audioRef.current?.play();
//         }
//       }, [currentTime, currentBreak]);
//     const minutes = Math.floor(currentTime/60);
//     const seconds = currentTime %60;

//   return (
//     <div>
//         <h3 id='timer-label'>{timeLabel}</h3>
//         <h2 id='time-left'>{minutes<10 ? '0' + minutes : minutes}:{seconds<10 ? '0' + seconds : seconds}</h2>
//         <audio id='beep' ref={audioRef} src='/beep.mp3' typeof='audio/mpeg' ></audio>
//         {/* <audio id='beep'>
//             {minutes==0 && seconds==0? <source src='./beep.mp3'></source>:null}
//         </audio> */}
//     </div>
//   )
// }

// export default Timer
