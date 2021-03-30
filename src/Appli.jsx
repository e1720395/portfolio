import './Appli.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { useState } from "react";



export default function Appli() {
//Toogle of navigation menu in mobile view
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

//navigation between pages
  return (
    <div className="Appli">
        <div className={`sidebar ${navToggle ? 'nav-toggle':''}`}>
          <NavBar />
        </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />  
              </Route>
              <Route path="/about" exact>
                <AboutPage />  
              </Route>
              <Route path="/portfolio" exact>
                 <PortfolioPage />   
              </Route>
              <Route path="/contact" exact>
                <ContactPage />  
                </Route>
              <Route path="/blog" exact>
                <BlogPage />  
              </Route>
            </Switch>
          </div>
        </div>
        
    </div>
  );
}
