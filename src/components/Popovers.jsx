import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const Popovers = (props) => {
    return (
        <OverlayTrigger
            key='top'
            placement='top'
            overlay={
                <Tooltip id='tooltip-top'>
                    {props.info}
                </Tooltip>
            }
        >
            <img src={props.src} className='footer__icon' alt=''></img>
        </OverlayTrigger>
    )
}

export default Popovers