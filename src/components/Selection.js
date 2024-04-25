
import React, { useEffect, useState } from 'react'

const Selection = (props) => {
    const [bgColor, setBgColor] = useState("");
    const { applyColor } = props;

    function updateSelectionStyle(nextBackground) {
        setBgColor(nextBackground);
        // console.log("hit", nextBackground, bgColor);
    }
    useEffect(()=>{
        applyColor(updateSelectionStyle)
    })
    
    return (
        <div className='fix-box' style={{ backgroundColor: bgColor.background }} onClick={() => applyColor(updateSelectionStyle)}>
            <h1>Selection</h1>
        </div>
    )
}

export default Selection