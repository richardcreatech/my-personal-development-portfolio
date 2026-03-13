import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

function Project(){
    return(
        <section id="project_page">
            <section id="inner_project_page">

                {/* This is the title of the page */}
                <div className='title'><h2>Projects</h2></div>
                
                {/* This holds the link to the page and a preview of that page */}
                <div id='project_preview'>
                  

                    <div className="project_view">
                            <iframe src="https://my-frontend-mentor-contact-form.netlify.app/" title="W3Schools Free Online Web Tutorials"></iframe>
                    </div>

                      <div className="project_links">
                        <button><FontAwesomeIcon icon={faGithub} /></button>
                        <button><FontAwesomeIcon icon={faFigma} /></button>
                        <button><FontAwesomeIcon icon={faGlobe} /></button>
                    </div>

                </div>

                    {/* This is like the control panel that scans between various projects */}
                <br />  
                <div className="project_controls">
                    <button><FontAwesomeIcon icon={faArrowRight} /><p>Next</p></button>
                    <button> <FontAwesomeIcon icon={faFile} /> Read More</button>
                </div>
            </section>
        </section>
    );
}

export default Project;