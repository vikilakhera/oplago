import React, { useState } from 'react';

function Header(props) {

    return(
        <div className="header">
            <div className="element-1">
                <button><i className="fas fa-circle"></i>Live</button>
                <div>Upcoming Live Coaching</div>
            </div>
            <div className="element-2">
                <button onClick={props.next}><i class="fas fa-less-than"></i></button>
                <button onClick={props.next}><i class="fas fa-greater-than"></i></button>
            </div>
        </div>
    )
}

export default Header;