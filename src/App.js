import React from 'react';
import {ReactComponent as Logo} from './assets/img/adrenalin.svg';
import data from './feed/data.json';
import NavItem from './components/NavItem';
import Card from './components/Card';

function App() {

  const cards = data.map((value, index) => {
    const {id, title, title_long, tag, thumb, image, slug, questions} = value
    return <Card
              key={id}
              image={image}
              title={title}
              title_long={title_long}
              tag={tag}
              slug={slug}
            />
  })

  return (
    <div className="App">
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col d-flex justify-content-between">
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
        <div className="row">
          { cards }
        </div>
      </div>
    </div>
  );
}

export default App;
