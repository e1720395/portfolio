import './Appli.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';



export default function Appli() {
  return (
    <div className="Appli">
        <div className="sidebar">
          <NavBar />
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
                {/* <PortfolioPage />   */}
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
