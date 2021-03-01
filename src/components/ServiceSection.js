import React from 'react';

export default function ServiceSection({image,title}) {
    return(
        <div className="ServiceSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} alt=""/>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque sint perferendis deleniti vero.
                    </p>
                </div>
            </div>
        </div>
    )
}