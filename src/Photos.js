import React from "react";

export default function Photos(props){
    
    if(props.photos)
    {
        return(
            <section>
                <div className='row'>
                     <div className ='col-4'>
                    {props.photos.map(function(photo, index){
                    return(
                        <a href={photo.src.original} target='_blank' rel='noreferrer' key={index}>
                            <img src={photo.src.medium}
                            alt={photo.src.photographer} 
                           />
                        </a>
                    
                );
        })}
        </div>
        </div>
    </section>
    );
} else{
    return null;
}
}