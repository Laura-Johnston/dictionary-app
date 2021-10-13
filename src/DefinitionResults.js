import React from "react";
import FoundDefinition from './FoundDefinition'
import Phonetic from './Phonetic';

export default function DefinitionResults(props) {
    if (props.results) {
        return(
            <div>
                <section>
                    <h2 className='result' id='word'>{props.results.word}</h2>
                    {props.results.phonetics.map(function(phonetic, index){
                        return(
                        <div key={index}>
                            <Phonetic phonetic={phonetic}/>
                        </div>
                    );
             })}
             </section>
                {props.results.meanings.map(function(meaning, index) {
    //console.log(meaning.definitions[0].definition);
                    return(
                        <div key={index}>
                            <section>
                            <FoundDefinition meaning={meaning}/>
                            </section>
                        </div>
                    );
                })}
            </div>

        );
    } else {
        return null
    }
}