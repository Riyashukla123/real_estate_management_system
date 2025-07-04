import React from 'react';
import Fav from './Fav.js'
import Services from './Services.js'
import About from './About.js'
import ForYou from "./ForYou.js"

function MainHomePage() {
  return (
    <div className="App">
      <Fav/>
      <Services/>
      <About/>
      <ForYou/>
    </div>
  );
}

export default MainHomePage;