import React from 'react'

export const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
    // style={{
    //     border:'3px solid',
    //     width:'100%',
    //     height:'100px',
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center'
    // }}
    className="square">
        <h1>{props.value}</h1>

    </div>
  )
}
