
import React, { useState } from "react";

export default function Dictionary () {
    let [word, setWord] = useState("");

function dictionarySearch (event){
    event.preventDefault();
    alert(`searching for ${word}`);
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