import React from 'react'

function Button(props) {
    return (
        <button onClick={() => {
            props.clickBtnHandler(props.children)
        }} className='digit' id={props.id}>
            {props.children}
        </button>
    )
}

export default Button
