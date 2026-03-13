import React from 'react';
import Home from "./Pages/Home"
import Header from './components/Header';

// This is where the components and styling for my portfolio stays
const App = function(){
  return(
    <main>
       <Header />
       <Home />
    </main>
  );
}

export default App;