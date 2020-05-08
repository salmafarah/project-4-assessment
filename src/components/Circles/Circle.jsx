import React from 'react';
import './Circle.css';

const Circles = props => {
    return(
        <div className="Circles">
            <div className={props.selectedCircle === 'firstCircle' ? 'selectedCircle' : null}>
                1
            </div>
            <div className={props.selectedCircle === 'secondCircle' ? 'selectedCircle' : null}>
                2
            </div>
            <div className={props.selectedCircle === 'thridCircle' ? 'selectedCircle' : null}>
                3
            </div>
            <div className={props.selectedCircle === 'fourthCircle' ? 'selectedCircle' : null}>
                4
            </div>
        </div>
    );
}

export default Circles;