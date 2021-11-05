import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faMobileAlt,faTabletAlt,faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap,faReact,faHtml5,faCss3Alt,faJs, faDeskpro} from '@fortawesome/free-brands-svg-icons';
import './about.css';
import {Button} from 'reactstrap' 
import TeamImage from '../happyTeam.jpeg';



function About() {
    return (
        <div className="about_us " >
            <div className="skill_icons">
             <FontAwesomeIcon icon={faBootstrap} />
             <FontAwesomeIcon icon={faHtml5} />
             <FontAwesomeIcon icon={faReact} />
             <FontAwesomeIcon icon={faCss3Alt} />
             <FontAwesomeIcon icon={faJs} />
            </div>
            
            <div className='service_feature container'>
                
                <div className="device_icons_container" id="ABOUT">
                    <FontAwesomeIcon icon={faTabletAlt} className="device_icon device_icon_tablet"/>
                    <FontAwesomeIcon icon={faDesktop} className="device_icon device_icon_desktop" />
                    <FontAwesomeIcon icon={faMobileAlt} className="device_icon device_icon_mobile" />

                </div>
                <div className="feature_declare">
                    <h3>
                    CROSS BROWSER COMPATABILITY WITH RESPONSIVE DESIGN
                    </h3>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Vestibulum ac diam sit amet
                         quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.</p>
<Button id="READMORE">Read more</Button>
                </div>
              
             </div>   
             
             <div className="customer_experience container">
 
             
            <div className="customer_satisfaction">
             <h3>Quality And Satisfaction</h3>
              <p>
              Pellentesque in ipsum id orci porta dapibus.
               Nulla quis lorem ut libero malesuada feugiat.
                Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
            </div>

             <img src={TeamImage} alt="team with happiness and customer satisfation" className="customer_happy_image"/>
             </div>

        </div>
    )
}

export default About
