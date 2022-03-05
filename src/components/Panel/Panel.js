import React from 'react';
import classes from './panel.module.css'


function Panel({clickHandler, resetHandler, startHandler, stopHandler, disableStartButton, started}) {

    const handleButtonClick = (val) => {
        clickHandler(val)
    }

    const handleResetClick = () => {
        resetHandler()
    }

    const handleStartClick = () => {
        startHandler()
    }
    const handleStoptClick = () => {
        stopHandler()
    }

    return (
        <div className={classes.btnContainer}>
            <button onClick={() => {
                handleButtonClick(1)
            }} className={classes.btn}>1
            </button>
            <button onClick={() => {
                handleButtonClick(2)
            }} className={classes.btn}>2
            </button>
            <button onClick={() => {
                handleButtonClick(3)
            }} className={classes.btn}>3
            </button>
            <button onClick={() => {
                handleButtonClick(4)
            }} className={classes.btn}>4
            </button>
            <button onClick={() => {
                handleButtonClick(5)
            }} className={classes.btn}>5
            </button>
            <button onClick={() => {
                handleButtonClick(6)
            }} className={classes.btn}>6
            </button>
            <button onClick={() => {
                handleButtonClick(7)
            }} className={classes.btn}>7
            </button>
            <button onClick={() => {
                handleButtonClick(8)
            }} className={classes.btn}>8
            </button>
            <button onClick={() => {
                handleButtonClick(9)
            }} className={classes.btn}>9
            </button>
            <button onClick={() => {
                handleButtonClick(0)
            }} className={classes.zeroButton}>0
            </button>
            <button onClick={() => {
                handleResetClick()
            }} className={`${classes.lastRow} ${classes.resetButton}`}>Reset
            </button>

            {started === true ? <button
                onClick={() => {
                    handleStoptClick()
                }
                }
                className={`${classes.lastRow} ${classes.stopButton}`}>Stop</button> : <button
                onClick={() => {
                    handleStartClick()
                }
                } className={`${classes.lastRow} ${classes.startButton}`} disabled={disableStartButton}>Start</button>}


        </div>
    );
}

export default Panel;