import  React, { useEffect, useState }  from "react";



const Timers = () =>{
    const [seconds,setseconds]=useState (0);
    const [minutes,setminutes]=useState (0);
     
    let timer;
    useEffect (()=>{
        timer=setInterval(()=>{
            setseconds (seconds +1);
            if(seconds === 59){
                setminutes(minutes +1);
                setseconds(0);
            }
        },1000)
        return () => clearInterval (timer);
    }) 
    
    const restart =()=>{
        setseconds(0);
        setminutes(0);
    }

    const stop =()=>{
       clearInterval(timer)
    }
    return (
        <>
            <div className="timer">
                <div className="container">
                  <div className="time_container">
                    <h1>
                        Timer
                    </h1>
                    <h1>{minutes <10? "0" +minutes :minutes}
                    :{seconds  <10? "0" +seconds:seconds}
                    </h1>
                    <button className="restart" onClick={restart}> повторный запуск</button>
                    <button className="stop " onClick={stop}> стоп</button>
                  </div>
                </div>
            </div>
        </>
    )
};

export default Timers;