import React from 'react';
import Home from "./Pages/Home"
import Header from './components/Header';
import Project from './Pages/Projects';

// This is where the components and styling for my portfolio stays
const App = function(){
  return(
    <main>
       <Header />
       <Home />
       <Project />
    </main>
  );
}

export default App;