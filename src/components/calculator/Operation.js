import React from 'react'

function Operation(props) {
    return (
        <button onClick={() => {
            props.clickOperationHandler(props.children)
        }} className='operation-btn' id={props.id}>
            {props.children}
        </button>
    )
}

export default Operation
