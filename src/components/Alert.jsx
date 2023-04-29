import React from 'react';

function Alert(props){
    // console.log('triggered');
    // return (
    //     props.msgArr.map((msg,index)=> 
    //         <div className='container' key={index}>
    //         <div className={`alert alert-${msg.type} alert-dismissible fade show`} role="alert">
    //             <strong>{msg.type[0].toUpperCase()+msg.type.slice(1)}</strong> {msg.msg}
    //         </div>
    //     </div>
    //         )
    //     // props.msgArr.forEach((msg)=>{
        
    //     // })
        
    // )
    return (
        props.msg &&
        <div className='container'>
            <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
                <strong>{props.type[0].toUpperCase()+props.type.slice(1)}</strong> {props.msg}
            </div>
        </div>
    )
}
export default Alert;