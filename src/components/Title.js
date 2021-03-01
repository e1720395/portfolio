import React from 'react';


export default function Tittle({title, span}) {
    return(
        <div className="Title">
            <h3>
                {title}
                <span>{span}</span>
            </h3>
        </div>
    )
}
