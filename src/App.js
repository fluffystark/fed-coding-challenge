import React from 'react';
import {ReactComponent as Logo} from './assets/img/adrenalin.svg';
import NavItem from './components/NavItem';
function App() {
  return (
    <div className="App">
      <div className="container-fluid pt-5">
        <div className="row justify-content-between">
          <Logo className="logo" />
          <div className="d-flex flex-row flex-wrap">
            <NavItem>Culture</NavItem>
            <NavItem>Work</NavItem>
            <NavItem>Clients</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Careers</NavItem>
            <NavItem>Contact</NavItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
