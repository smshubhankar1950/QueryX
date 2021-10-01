import React from 'react';
import "./ScrollDown.css"
function ScrollDown(props) {
    let smoothScroll = function() {
        var target = document.getElementById("about");
        target.scrollIntoView()
    }
    return (
        <div className="containerDown" onClick={smoothScroll} style={{cursor:'pointer'}}>
            <div className="field">
                <div className="scroll"></div>
            </div>
        </div>
    );
}

export default ScrollDown;