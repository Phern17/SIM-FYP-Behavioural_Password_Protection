import React from 'react'
import ReactDom from 'react-dom'
import './Backdrop.css'

const BackDrop = (props) => {
    const content = <div className='backdrop' onClick={props.onClick}></div>

    return ReactDom.createPortal(content, document.getElementById('background-trigger'))
}

export default BackDrop;