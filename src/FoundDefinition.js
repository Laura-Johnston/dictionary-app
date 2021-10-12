import React from "react";


export default function FoundDefinition(props){
    
    return (
        <div>
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
                </div>   );
        })}
                </div>
        );
}