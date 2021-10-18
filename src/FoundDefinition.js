import React from "react";
import './FoundDefinitions.css';
import Synonyms from './Synonyms';
export default function FoundDefinition(props){
    
    return (

        <div className='meaning'>
        <h2 className='meaning'>{props.meaning.partOfSpeech}</h2><br />
        {props.meaning.definitions.map(function(definition,index){
            //console.log(`defintion: ${definition.definition}`);
            return(
                <div key ={index} className='definitionMeaning'>
                <h4>
                {definition.definition}
                </h4> 
                <h5>
                {definition.example}
                </h5>
                <Synonyms synonyms={definition.synonyms} /> <br />
                </div> 
            );
        })}
                </div>
        );
}