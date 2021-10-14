import React from "react";

export default function Phonetic(props){
    //console.log(props.phonetic);
    return(
        <div className='phonetic'>
        
            <a href={props.phonetic.audio} target='_blank' rel='noreferrer'>
            <i class="bi bi-volume-up"></i>   
            </a>
              
       <small id='phoeticword'> / </small>
       
       {props.phonetic.text} 
       <small> / </small>
       
            
        </div>
    )
}