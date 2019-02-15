import React from 'react';
import './Banner.css'
import ProfilePic from './../../img/me2.jpg';
import PDF from'./../../img/abraham-resume.pdf';

export default class Banner extends React.Component {

    render(props){
        return (
            <section className="banner"> 
                <div className="banner__img">
                    <img src={ProfilePic} alt="" />
                </div>
                <div className="banner__desc">
                    <p className="lead">Hello. my name is </p>
                    <h1>Abraham Montoya</h1>
                    <p>
                        I am a Level II Front-end UI Developer. My work centers around building responsive web components for Brand-Specific libraries and coding websites utilizing these components. I specialize in Html5, Css3, and JavaScript. Clean code is my signature.
                    </p>
                    <a href={PDF} target="_blank"> Resume </a>
                </div>
            </section>
        )
    }
}