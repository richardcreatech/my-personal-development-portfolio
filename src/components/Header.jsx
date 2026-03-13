import React from 'react'

const Header = function(){
    return(
        <header>
            {/* This contains the logo */}
            <ul>
              <h3>Cardo</h3>  
            </ul>

            {/* This holds the navigation */}
            <ul>
                <li>Home</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Volunteers</li>
            </ul>

            {/* This olds special button with distinct features */}
            <ul>
                <button>Know Me</button>
                <button>My Resume</button>
            </ul>
        </header>
    );
}

export default Header;