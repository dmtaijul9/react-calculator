import React from 'react'

function Operation(props) {
    return (
        <button className='operation-btn' id={props.id}>
            {props.children}
        </button>
    )
}

export default Operation
