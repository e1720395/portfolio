import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../img/avatar.jpg';

export default function NavBar(){
    return(
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img  src={avatar} alt=""/>
                </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            À propos 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" exact activeClassName="active">
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            
                            Contacter
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2021
                    </p>
                </footer>
            </nav>

        </div>
    );
}

