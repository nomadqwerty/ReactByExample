import React from 'react';
import './seasons.css'

let seasonObj = {
    summer:{
        text:' summer in nigeria is wet and hot',
        iconName:'sun'
    },
    winter:{
        text:' summer in nigeria is wet and hot',
        iconName:'snowflake'
    }
}

const getSeason = (lat)=>{
    let month = new Date().getMonth()
    if(month>2&&month<9){
        return lat > 0? 'summer' : 'hamatan'
    }else{
        return lat > 0? 'summer' : 'hamatan'
    }
}
const Seasons = (props)=>{
    let season = getSeason(props.lat)
    let {text, iconName} = seasonObj[season]
    return (
        <div className={`seasons ${season}`}> 
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>
                {text}
            </h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}


export default Seasons