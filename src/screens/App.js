import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routes from './Routes'

function App() {

  return (
    <div id="App">
      <div className="container-fluid main-page">
        <Header />
        <div id="webpushr-subscription-button"></div>
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
