import React from 'react';
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
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }

}