import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

function Home() {
    return(
        <section id="home_page">
                <h1>
                    <span>Build The Future</span>
                    <span> with Me</span>
                    </h1>
                    <p>Hello I’m Richard and I create not just websites I also build solutions</p>
                    <div className="point_down">
                        <FontAwesomeIcon className='arrow-down' icon={faChevronDown} />
                        <FontAwesomeIcon className='arrow-down' icon={faChevronDown} />
                        <FontAwesomeIcon className='arrow-down'  icon={faChevronDown} />
                    </div>
        </section>
    );
}

export default Home