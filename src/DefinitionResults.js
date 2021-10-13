import React from "react";
import FoundDefinition from './FoundDefinition'

export default function DefinitionResults(props) {
    if (props.results) {
        return(
            <div>
                <h2 className='result' id='word'>{props.results.word}</h2>
                {props.results.meanings.map(function(meaning, index) {
    //console.log(meaning.definitions[0].definition);
                    return(
                        <div key={index}>
                            <FoundDefinition meaning={meaning}/>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null
    }
}