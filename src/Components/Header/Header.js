import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {

    state = {
        showMobileMenu: false
    }

    toggleMenu = () => {
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        })
    }

    render(){
        // console.log(this.state.showMobileMenu)
        return (
            <header className="header">
                <div className="header__container">
                <div className="header__logo">
                    <h2>&lt;abrahamCodes/&gt;</h2>
                </div>
                    <button onClick={this.toggleMenu}><i className="fas fa-bars"></i></button>
                    <nav className={this.state.showMobileMenu ? "active" : null
                    }>

                        <ul>
                            <li> 
                                <NavLink exact to="/">
                                    About
                                </NavLink> 
                            </li>
                            <li> 
                                <NavLink exact to="/projects">
                                    Projects
                                </NavLink>
                            </li>
                            <li> 
                                <NavLink exact to="/contact">
                                    Contact
                                </NavLink> 
                            </li>
                        </ul>

                    </nav>
                </div>
            </header>
        )
    }

}