import React from 'react';
import classes from './display.module.css'


function Display({time,clickedValue}) {
    const valueFormatter = (digit) => {
        return digit < 10 ? '0'+ digit : ''+digit
    }
    const secondsFieldHandler =() =>{
        return clickedValue.length > 0 ? valueFormatter(parseInt(clickedValue )) : valueFormatter(time.seconds)
    }

    return (
        <div className={classes.display_container}>
            <div className={classes.content}>
                <span className={classes.digitContainer}>{valueFormatter(time.hours)}</span>
                <span className={classes.label}>h</span>
            </div>
            <div className={classes.content}>
                <span className={classes.digitContainer}>{valueFormatter(time.minutes)}</span>
                <span className={classes.label}>m</span>
            </div>
            <div className={classes.content}>
                <p className={classes.digitContainer}>{secondsFieldHandler()}</p>
                <p className={classes.label}>s</p>
            </div>
        </div>
    );
}

export default Display;