import React, { Component } from 'react';
import Banner from '../Components/Banner/Banner';
import Skills from '../Components/Skills/Skills';
import Header from "./../Components/Header/Header";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner></Banner>
                <Skills></Skills>  
            </div>   
        );
    }
}

export default Home;