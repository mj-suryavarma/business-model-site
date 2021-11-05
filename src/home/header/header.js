import React,{useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import {NavItem,
    Navbar,
    NavLink,
NavbarToggler} from 'reactstrap';

function HeaderBar() {
 
    const [Y, setY ] = useState(window.scrollY);

    const NavigationHandler = useCallback(e => {
        setY(window.scrollY);
    },[Y])

    useEffect(() =>{
        setY(window.scrollY);
        
       window.addEventListener("scroll", NavigationHandler);

       return window.addEventListener("scroll", NavigationHandler);
    })

    return (
        <div className="heading"  style={Y > 750 ? {backgroundColor:'#010320'
                                                  ,position:'fixed',
                                                   top:'0',
                                                   transition:'3s'}:{color:'transparent'}}>
         <div className="logo" >MJS</div> 
         <Navbar className="navbar_container" >
                 <NavLink className="nav_link" href="#HOME">Home</NavLink>
                 <NavLink className="nav_link" href="#ABOUT">About us</NavLink>
                 <NavLink className="nav_link" href="#CONTACT">Contact</NavLink>
         </Navbar>

        </div> 
    )
}

export default HeaderBar;
