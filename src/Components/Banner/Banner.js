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
                        With 4 years of experience developing User Interfaces and creating reusable components, quality is the objective, learning something new is the fun part. As a new opportunity approaches, a new adventure waits!
                    </p>
                    <a href={PDF} target="_blank"> Resume </a>
                </div>
            </section>
        )
    }
}