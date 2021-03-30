import React from 'react';
import avatar from '../img/about.jpg';

export default function ImageSection() {
    return(
        <div className="ImageSection">
            <div className="img">
                <img src={avatar} alt="" />
            </div>
            <div className="about-info">
                <h4> Je suis <span> Créatif</span> </h4>
                <p className="about-text">
                    "Alimenté par des niveaux d'énergie élevés et un enthousiasme sans bornes, je suis
                    facilement inspiré et plus que disposé à suivre mes fascinations
                    partout où ils m'emmènent. Je suis passionné, expressif, esprit polyvalent
                    avec une capacité naturelle à divertir et à inspirer. Je ne suis jamais
                    satisfait de trouver des idées. Au lieu de cela, j'ai presque
                    besoin impulsif d'agir sur eux."
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Nom complet</p>
                        <p>Âge</p>
                        <p>Langues</p>
                        <p>Lieux</p>
                    </div>
                    <div className="right-section">
                        <p>: Valerii Kuzmenko</p>
                        <p>: 22</p>
                        <p>: Ukranian, Russian, English, French</p>
                        <p>: Montreal, LaSalle</p>
                    </div>
                </div> 
                <button className="btn-cv" >Télécharger mon CV</button>
            </div>
        </div>
    )
}
