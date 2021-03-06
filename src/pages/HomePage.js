import React from 'react';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

export default function HomePage() {
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Bonjour, je suis 
                    <span>
                        Valera Kuzmenko
                    </span>
                </h1> 
                <p className="h-sub-text">
                {/* Future Software Engineer with a passion for web 
                games technologies and several relevant
                experiences. Curious by nature and self-taught, I
                quickly familiarize myself with new technologies,
                tools, and environments! */}

                Futur ingénieur de logiciel avec une 
                passion pour les technologies de jeux 
                Web et plusieurs expériences pertinentes. 
                Curieuse de nature et autodidacte, je me familiarise 
                rapidement avec les nouvelles technologies, 
                outils et environnements!

                </p>
                <div className="icons">
                    <Link className="icon-holder">
                         <FontAwesomeIcon icon = {faFacebook} className="icon fb"/> 
                    </Link>
                    <Link className="icon-holder">
                         <FontAwesomeIcon icon = {faGithub} className="icon gh"/> 
                    </Link>
                    <Link className="icon-holder">
                         <FontAwesomeIcon icon = {faYoutube} className="icon yt"/> 
                    </Link>
                </div>
            </header>
        </div>
    );
}
