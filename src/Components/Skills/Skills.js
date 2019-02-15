import React from 'react';
import './Skills.css';
import Card from './../Cards/Cards';


export default class Skills extends React.Component {

    render(){
        return (
            <section className="skills">
                <div className="skills__container">
                    <div className="skills__desc">
                        <h1>Skills Overview</h1>
                        <p>
                            I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?
                    </p>
                    
                    </div>
                
                        <Card></Card>
                    
                </div>
            </section>
        )
    }

}