import {useEffect, useState} from "react";

import Display from "./components/Display/Display";
import Panel from "./components/Panel/Panel";

import './App.css';

function App() {
    let newDigit = ''
    const [clickedValue, setClickedValue] = useState('')
    const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0})
    const [intervalId, setIntervalId] = useState()
    const [started, setStarted] = useState()



    useEffect(() => {
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
            clearInterval(intervalId)
            setStarted(undefined)
        }
    }, [time])

    const clickHandler = (value) => {
        if( time.hours < 10 && !started){
            setTime(prevTime => {
                const {hours, minutes, seconds} = prevTime
                const newHours = hours === 0 ? Math.floor(minutes / 10) : (hours < 10 ? hours * 10 + Math.floor(minutes / 10) : hours % 10 * 10 + Math.floor(minutes / 10))
                const newMinutes = minutes === 0 ? Math.floor(seconds / 10) : (minutes < 10 ? minutes * 10 + Math.floor(seconds / 10) : minutes % 10 * 10 + Math.floor(seconds / 10))
                const newSeconds = seconds === 0 ? value : (seconds < 100 ? (seconds % 10) * 10 + value : seconds * 10 + value)
                return {hours: newHours, minutes: newMinutes, seconds: newSeconds}
            })
        }
    }

    const disableStartButton = () => {
        return started || time.seconds === 0 && time.minutes === 0 && time.hours === 0 ? true : false
    }

    const stopHandler = () => {
        clearInterval(intervalId)
        setStarted(false)
    }

    const resetHandler = () => {
        setTime({hours: 0, minutes: 0, seconds: 0})
        setStarted(undefined)
        if (intervalId) {
            clearInterval(intervalId)
        }
    }

    const startHandler = () => {
        setStarted(true)
        const id = setInterval(() => {
            setIntervalId(id)

            setTime(prev => {
                const {hours, minutes, seconds} = prev
                return seconds === 0 && minutes === 0 ?{hours:hours -1 , minutes: 59, seconds: 59} : (seconds === 0 && minutes > 0 ? {...prev, minutes: minutes - 1, seconds: 59} : {...prev, seconds: seconds - 1})
            })
        }, 1000)
    }

    return (
        <div className="App">
            <Display time={time} clickedValue={clickedValue}/>
            <Panel clickHandler={clickHandler} stopHandler={stopHandler} resetHandler={resetHandler}
                   startHandler={startHandler} started={started} disableStartButton={disableStartButton()}/>
        </div>
    );
}

export default App;
