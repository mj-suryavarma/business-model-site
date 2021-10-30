import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import {NavItem,
    Navbar,
    NavLink,
NavbarToggler} from 'reactstrap';

function HeaderBar() {
    return (
        <div className="heading">
         <div className="logo">MJS</div> 
         <Navbar className="navbar_container">
                 <NavLink className="nav_link" href="#">Home</NavLink>
                 <NavLink className="nav_link" href="#">About us</NavLink>
                 <NavLink className="nav_link" href="#">Contact</NavLink>
         </Navbar>

        </div> 
    )
}

export default HeaderBar;
