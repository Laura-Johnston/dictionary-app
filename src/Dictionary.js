import axios from "axios";
import React, { useState } from "react";
import Photos from "./Photos";
//css imports
import DefinitionResults from "./DefinitionResults";


export default function Dictionary (props) {
    let [word, setWord] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function grabDefinition(response){
//console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0])
    }
    
function dictionarySearch(){
   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(grabDefinition);
//pexels api call
    const pexelsAPI = `563492ad6f91700001000001f1d2fc4df3724237bed9b4c1ee02881b`;
    let pexelsURL =`https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers ={ Authorization: `Bearer ${pexelsAPI}` };
    axios.get(pexelsURL, { headers: headers }).then(handlePexelsResponse);

}
function handlePexelsResponse(response){
    setPhotos(response.data.photos);
}
function handleSubmit (event){
    event.preventDefault();
    dictionarySearch();
    
}

function handleWordSubmit(event){
    console.log(event.target.value);
    setWord(event.target.value);
}

function load(){
    setLoaded(true);
    dictionarySearch();
}

if (loaded){
return(
<div class='container'>
    <div className='top'>
        <section className='section'>
        <h3>what word do you need defined?</h3>
        <form onSubmit ={handleSubmit}>
        <input type="search" class="form-search" placeholder="Search" autoFocus onChange={handleWordSubmit}/>
        <input class="btn btn-outline-secondary" type="submit" id="search-button" value='Search'/>
        </form>
        </section>
        </div>
        <DefinitionResults results={results} />
        <Photos photos={photos} />
   
   </div>
)
} else{
    load();
    
}
}