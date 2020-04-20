import React from 'react';

const Validation=(props)=>{
    let validationMessage='Text long enough';

    if(props.inputlength<=5)
    {
        validationMessage='Text too short';
    }
    
    return(
       <div>
          <p>{validationMessage}</p>
           {/* {
            props.inputlength > 5?
           <p>Text long enough!</p>:
           <p>Text too short!</p>
            }            */}
       </div> 
    );

}; //Es6 function or simply method

export default Validation;