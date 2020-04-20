import React from'react';

const Char=(props)=>{
    const style={
        display: 'inline-block',
        padding: '20px',
        margin:'18px',
        textAlign:'center',
        border:'2px solid blue'
    };
   return(
    <div style={style} onClick={props.clicked}> 
        {props.character}
    </div>
   );

};// inline style
export default Char;
