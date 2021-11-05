import React, { useEffect } from 'react';
import './ourservice.css';
import { faDumpster,faBlog,faIndustry,faBug} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import {Label,Form,Button} from 'reactstrap';
import Aos from 'aos';
import "aos/dist/aos.css";



function OurService() {
 
  useEffect(() =>{ 
    Aos.init({ duration : 2000})
  });
  

   const readMoreStyle = {
     backgroundColor : 'white',
     color:' rgba(0, 9, 31, 0.8)',
    fontWeight:'900',
     font:'1.5rem'
   }
  return (
      <div className="ourservice_bg_image">
        <div id="OURSERVICE" className="ourservice_container">
            <section className="ourservice_heading">
            <h3>OUR SERVICES FOR
            </h3>
            <div className="ourservice_dot">

            </div>
              </section> 

           <div className="ourservice_smallBusiness">
               
               <FontAwesomeIcon icon={faDumpster} className="ourservice_icon"/>
               
               <h4>Small And Medium Business</h4>
              <p>
               Proin eget tortor risus. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada.
                Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada.
              </p>
              <Button style={readMoreStyle}>Read more</Button>
           </div>

           <div className="ourservice_ecommerce">
               <FontAwesomeIcon icon={faAmazon} className="ourservice_icon" />
               <h4>E-Commerce sites</h4>
              <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit.
                Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.  </p>
              <Button  style={readMoreStyle}>Read more</Button>
           </div>

           <div className="ourservice_personal">
               <FontAwesomeIcon icon={faBlog} className="ourservice_icon"/>
               <h4>Blogs</h4>
              <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, 
              auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.           </p>
              <Button  style={readMoreStyle}>Read more</Button>
           </div>

               <div className="ourservice_industrial">
               <FontAwesomeIcon icon={faIndustry} className="ourservice_icon"/>
               <h4>Industrial</h4>
              <p>
              Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
               Nulla porttitor accumsan tincidunt.
               Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.     </p>
              <Button style={readMoreStyle} >Read more</Button>
               </div>

               <div className="ourservice_bugfix">
               <FontAwesomeIcon icon={faBug} className="ourservice_icon"/>
               <h4>Bug Fixing and Add Content  </h4>
              <p>
              Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec,
               egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat.   </p>
              <Button style={readMoreStyle}>Read more</Button>
               </div>

        </div>
      </div>
    )
}

export default OurService
