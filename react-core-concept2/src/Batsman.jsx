import React, { useState } from 'react';

const Batsman = () => {
    const[count,setCount]=useState(0);
    const [sixes,setSixes]=useState(0)
    const handleSingle=()=>{
        const updatedRuns=count+1;
        setCount(updatedRuns);
    }
    const handleTwo=()=>{
        const updatedRuns=count+2;
        setCount(updatedRuns);
    }
    const handleFour=()=>{
        const updatedRuns=count+4;
        setCount(updatedRuns);
    }
    const handleSix=()=>{
        const updatedRuns=count+6;
        setCount(updatedRuns);
        const updatedSixes=sixes+1
        setSixes(updatedSixes);
    }
        return (
        <div>
            <h3>Bangladeshi Batsman</h3>
            <p>Count:{count}</p>
            <p>Six:{sixes}</p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleTwo}>Two</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
};

export default Batsman;