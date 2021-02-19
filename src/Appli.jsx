import './Appli.scss';
import NavBar from './components/NavBar';


export default function Appli() {
  return (
    <div className="Appli">
        <div className="sidebar">
        <NavBar />
        </div>
        <div className="div-content"></div>
        
    </div>
  );
}
