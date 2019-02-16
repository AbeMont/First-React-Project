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
                            I am a Level II Frontend UI Developer. My work centers around building responsive web components
                            for Brand - Specific libraries and coding websites utilizing these components. I specialize in Html5, Css3, and JavaScript. Clean code is my signature.
                    </p>

                    </div>
                
                        <Card></Card>
                    
                </div>
            </section>
        )
    }

}