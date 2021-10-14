import React from "react";

export default function Photos(props){
    
    if(props.photos)
    {
        return(
            <section id='photo'>
                <div className="row">
                     
                    {props.photos.map(function(photo, index){
                    return(
                       <div className ='col-4' >
                            <a href={photo.src.original} target='_blank' rel='noreferrer' key={index}>
                            <img src={photo.src.landscape}
                            alt={photo.src.photographer} 
                            className="img-fluid"
                           />
                        </a>
                    </div>
                );
        })}
        </div>
        
        
    </section>
    );
} else{
    return null;
}
}