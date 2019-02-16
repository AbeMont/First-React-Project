import React, { Component } from 'react';
import Banner from '../Components/Banner/Banner';
import Skills from '../Components/Skills/Skills';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner></Banner>
                <Skills></Skills>  
            </div>   
        );
    }
}

export default Home;