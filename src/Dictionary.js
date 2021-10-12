import axios from "axios";
import React, { useState } from "react";

export default function Dictionary () {
    let [word, setWord] = useState("");

    function grabDefinition(response){
        console.log(response);
    }
function dictionarySearch (event){
    event.preventDefault();
    alert(`searching for ${word}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`
    axios.get(apiUrl).then(grabDefinition);
}
function handleWordSubmit(event){
    console.log(event.target.value);
    setWord(event.target.value);
    
}



return(
    <div>
        <form onSubmit ={dictionarySearch}>
            <input type ='search' placeholder='type word for definition' onChange={handleWordSubmit} />
            <input type='submit' value='submit'/>
        </form>
    </div>
)
}