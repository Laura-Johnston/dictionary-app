import React from "react";
import './FoundDefinitions.css';
import Synonyms from './Synonyms';

export default function FoundDefinition(props){
    
    return (
        <div className='Meaning'>
        <h3 className='result'>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition,index){
            console.log(`defintion: ${definition.definition}`);
            return(
                <div key ={index}>
                <h5><strong>
                {definition.definition}
                </strong></h5>
                <br />
                <em>
                {definition.example}
                </em>
                <Synonyms synonyms={definition.synonyms} />
                </div> 
            );
        })}
                </div>
        );
}