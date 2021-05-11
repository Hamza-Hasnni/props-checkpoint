import './App.css';
import ProfilComponent  from './profil/ProfilComponent';
import Welcome from "./profil/Welcome"
import PropTypes from "prop-types";
import Bio from "./profil/Bio"


function App() {
  const alertMyInput = fullName => alert(fullName);
  return (
    <div className="App">
      <ProfilComponent fullName={true}
       profession="full-stack js ">
         <Bio age={27} adresse="Sbiba-kasserine 1270" phone={99716956} />
          <img 
          style={{maxWidth:"100px",border:"3px solid red"}} 
          src="./HAMZ.png" 
          alt="hamza"/>
        </ProfilComponent>
      <Welcome fullName="Hamza Hasni" alertMyInput={alertMyInput}/>
    </div>
  );
}
App.propTypes ={
  fullName: PropTypes.string,
  profession : PropTypes.string,
  age : PropTypes.number,
  phone : PropTypes.number
}
export default App;
