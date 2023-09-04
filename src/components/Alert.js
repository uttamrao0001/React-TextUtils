import React, { useState } from 'react'

function Alert(props) {

    const Capitalise = (word) => {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        //for layout shift adding a height to have alert a specific height
        <div style={{ height: '50px' }}>
            {
                props.alert && <div><div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{Capitalise(props.alert.type)}</strong>: {props.alert.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                </div>
            }
        </div>
    )
}

export default Alert
