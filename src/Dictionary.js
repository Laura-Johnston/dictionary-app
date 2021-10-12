import axios from "axios";
import React, { useState } from "react";
import DefinitionResults from "./DefinitionResults";


export default function Dictionary () {
    let [word, setWord] = useState("");
    let [results, setResults] = useState(null);

    function grabDefinition(response){
//console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0])
    }
function dictionarySearch (event){
    event.preventDefault();
    alert(`searching for ${word}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(grabDefinition);
}
function handleWordSubmit(event){
    //console.log(event.target.value);
    setWord(event.target.value);
    
}



return(
    <div>
        <form onSubmit ={dictionarySearch}>
            <input type ='search' placeholder='type word for definition' onChange={handleWordSubmit} />
            <input type='submit' value='submit'/>
        </form>
        <DefinitionResults results={results} />
    </div>
)
}