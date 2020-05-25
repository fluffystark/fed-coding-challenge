import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './screens/Routes'

function App() {

  return (
    <div className="App">
      <div className="container-fluid pt-5 main-page">
        <Header />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
