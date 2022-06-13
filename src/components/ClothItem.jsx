import React from 'react'

const ClothItem = (props) => {
    return (
        <div className='uniform__cloth-item'>
            <img className='uniform__cloth-img' src={props.src} alt=''></img>
            <div className='uniform__cloth-container-text'>
                <h4 className='uniform__cloth-title'>{props.title}</h4>
                <p className='uniform__cloth-text'>{props.text}</p>
            </div>
        </div>
    )
}

export default ClothItem