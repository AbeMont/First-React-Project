import React from 'react';
import Logo from './../../img/icons/react-1.svg';
// import { Link } from 'react-router-dom';

export default class BannerReact extends React.Component {
    render(){
        return (
            <section className="Banner-react">
                <div className="container">
                    <div className="Banner-react__title">
                        <h1>As a new skill, I proudly present my website built in React!</h1>
                    </div>
                    <div className="Banner-react__content">
                        <img src={Logo} alt="React Logo"/>
                        <a href="https://github.com/AbeMont/First-React-Project" target="_blank" rel="noopener noreferrer">View Repo</a>
                    </div>
                </div>
            </section>
        )
    }
}