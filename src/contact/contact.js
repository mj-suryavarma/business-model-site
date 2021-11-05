import React,{useState,useEffect} from 'react';
import './contact.css';
import mjImage from '../mj_suryavarma.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


function ContactMe() {

    const [contactVisible , setContactVisible] = useState(false);

    const visibilityHandler = () =>{
        setContactVisible(!contactVisible);
    }
     
    
    return (
        <div className="footer_container" id="CONTACT"> 
        <div className="footer_allAbout_company ">

            <div className="footer_company" >
                <h2>MJS</h2>
                <p>
                Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
                 auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                </p>
                <p style={{fontSize:'1.5rem'}}>&copy; MJS @ 2021</p>
            </div>
            <div className="footer_company_policy">
             <h4>Company</h4>
             <ul>
                 <li>
                    <a href="#"> 
                    Terms
                    </a>
                    </li>
                    
                 <li>
                    <a href="#"> 
                    Conditions
                    </a>
                    </li>
                 <li>
                    <a href="#"> 
                    Policy
                    </a>
                    </li>
                 <li>
                    <a href="#"> 
                    History
                    </a>
                    </li> 
             </ul>

            </div>
            <div className="footer_company_contact">
            <h4>Contact</h4>
             <ul>
                 <li>
                     <a href="mailto:mjsuryavarma@gmail.com">Email</a>
                     </li>
                     <li>
                    <a href="#"> 
                    Website
                    </a>
                    </li>
                 <li>
                    <a href="#"> 
                    Twitter
                    </a>
                    </li>
                 <li>
                    <a href="#"> 
                    Facebook
                    </a>
                    </li>  
             </ul>

            </div>
        </div>

        <div className="developer_contact_container">
            <h3 className="developer_heading" onClick={visibilityHandler} >Developer Contact</h3>
         <div className="developer_contact" style={ contactVisible ? {display: 'none'} : {display:'flex'}}>
            <div className="image_container">
            <img src={mjImage} alt="developer mj suryavarma" className="developer_mj_image"></img>
           <div className="image_declare">
             <span>Font-end developer </span>
             <span>Freelancer</span>
           </div>
            </div>

             <div className="sm_container">
                 <a href="#" className="sm_link">
              <FontAwesomeIcon icon={faFacebook} className="sm_icon"  />
                 </a>
                 <a href="#" className="sm_link">
              <FontAwesomeIcon icon={faLinkedin} className="sm_icon" />
                 </a>
                 <a href="#" className="sm_link">
              <FontAwesomeIcon icon={faTwitter} className="sm_icon" />
                   </a>  
                   <a href="#" className="sm_link">
              <FontAwesomeIcon icon={faGithub} className="sm_icon" />
                    </a>
             </div>
         </div>

        </div>
        </div>
    )
}

export default ContactMe
