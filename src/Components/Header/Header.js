import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'

export default class Header extends React.Component {

    state = {
        showMobileMenu: false
    }

    toggleMenu = () => {
        console.log("toggle");
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        })
    }

    render(){
        console.log(this.state.showMobileMenu)
        return (
            <header className="header">
                <div className="header__container">
                    <button onClick={this.toggleMenu}><i className="fas fa-bars"></i></button>
                    <nav className={this.state.showMobileMenu ? "active" : null
                    }>
                        <ul>
                            <li>
                                {/* <Link to="/">About</Link> */}
                                About
                            </li>
                            <li>
                                {/* <Link to="/">Projects</Link> */}
                                Projects
                            </li>
                            <li>
                                {/* <Link to="/">Contact</Link> */}
                                Contact
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }

}