import React from 'react'
import './CircleSelector.css'

const CircleSelector = props => {
    
    const handleChange = evt => {
        props.handleSelectedCircle(evt.target.value)
      }

if (props.selectedCircle) {

    return(
        <div className='CircleSelector' >
            <button className={props.selectedCircle === 'firstCircle' ? 'selectedCircle' : ''} value='firstCircle' onClick={handleChange}>
                {props.selectedCircle === 'firstCircle' ? 'circle 1 selected' : 'select circle 1' }
            </button>
            <button className={props.selectedCircle === 'secondCircle' ? 'selectedCircle' : ''} value='secondCircle' onClick={handleChange}>
                {props.selected === 'secondCircle' ? 'circle 2 selected' : 'select circle 2' }
            </button>
            <button className={props.selectedCircle === 'thridCircle' ? 'selectedCircle' : ''} value='thridCircle' onClick={handleChange}>
                {props.selected === 'thridCircle' ? 'circle 3 selected' : 'select circle 3' }
            </button>
            <button className={props.selectedCircle === 'fourthCircle' ? 'selectedCircle' : ''} value='fourthCircle' onClick={handleChange}>
                {props.selectedCircle === 'fourthCircle' ? 'circle 4 selected' : 'select circle 4' }
            </button>
        </div>
        )
    }
}


export default CircleSelector