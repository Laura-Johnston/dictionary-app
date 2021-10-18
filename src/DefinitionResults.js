import React from "react";
import FoundDefinition from './FoundDefinition'
import Phonetic from './Phonetic';


export default function DefinitionResults(props) {
    if (props.results) {
        return(
            <div>
                <section className ='defintionResults section'>
                    <h1 className='result' id='word'>
                        {props.results.word}</h1>
                    {props.results.phonetics.map(function(phonetic, index){
                       return(
                        <div key={index} className="phonetic">
                            <Phonetic phonetic={phonetic}/><br />
                        </div>
                    );
             })}
             </section>
             <section className='section'>
                {props.results.meanings.map(function(meaning, index) {
    //console.log(meaning.definitions[0].definition);
                    return( 
                            
                           
                            <FoundDefinition meaning={meaning}/>
                            
                            
                    );
                })}
           </section> 
            </div>

        );
    } else {
        return null
    }
}