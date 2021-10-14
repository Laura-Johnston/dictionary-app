import React from "react";

export default function Synonyms(props){
    if (props.synonyms) {
        return(
            <p className='synonyms'>
                
            {props.synonyms.map((synonyms, index) =>{
                if(index < 6 ){
                return(
                        
                     <small key={index}> 
                    
                         |   {synonyms}   |
                    </small>
                )
             } else return null
            })}
             </p>
                )
    }else return null;
}