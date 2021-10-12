import React from "react";
import './FoundDefinitions.css';


export default function FoundDefinition(props){
    
    return (
        <div className='Meaning'>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition,index){
            console.log(`defintion: ${definition.definition}`);
            return(
                <div key ={index}>
                <h5><strong>
                {definition.definition}
                </strong></h5>
                <br />
                <p><em>
                {definition.example}
                </em></p>
                </div> 
            );
        })}
                </div>
        );
}