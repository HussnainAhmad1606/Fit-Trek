import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import ConfettiExplosion from 'react-confetti-explosion';
import { toast } from 'react-hot-toast';



export default function Timer ({workoutComplete, duration}){
   
    const [isPlaying, setIsPlaying] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  

    return (
        <>
        
        <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={3}
      onComplete={workoutComplete}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}
      >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
    <div className='my-10'>
        <button onClick={()=> {
           setIsPlaying(true) 
        }} className='btn btn-primary'>Start</button>
        <button onClick={()=> {
            setIsPlaying(false)
        }} className='mx-5 btn btn-primary'>Pause</button>
    </div>
        </>
    )
}
