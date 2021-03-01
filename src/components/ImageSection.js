import React from 'react';
import avatar from '../img/avatar.png';

export default function ImageSection() {
    return(
        <div className="ImageSection">
            <div className="img">
                <img src={avatar} alt="" />
            </div>
            <div className="about-info">
                <h4> I am <span> Lorem Ipsum</span> </h4>
                <p className="about-text">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full name</p>
                        <p>Age</p>
                        <p>Languages</p>
                        <p>Location</p>
                    </div>
                    <div className="right-section">
                        <p>: Valerii Kuzmenko</p>
                        <p>: 22</p>
                        <p>: Ukranian, Russian, English, French</p>
                        <p>: Montreal, LaSalle</p>
                    </div>
                </div> 
                <button className="btn-cv">Download CV</button>
            </div>
        </div>
    )
}
