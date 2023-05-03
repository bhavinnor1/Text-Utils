import React from 'react';

function Alert(props) {
    return (
        props.msg &&
        <div style={{ height: "200px" }} className='container'>
            <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
                <strong>{props.type[0].toUpperCase() + props.type.slice(1)}</strong> {props.msg}
            </div>
        </div>
    )
}
export default Alert;