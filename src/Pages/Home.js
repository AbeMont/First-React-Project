import React, { Component } from 'react';
import Header from "./../Components/Header/Header";
import Banner from '../Components/Banner/Banner';
import Skills from '../Components/Skills/Skills';
import BannerReact from '../Components/Banner/Banner-react';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Skills/> 
                <BannerReact/>
            </div>   
        );
    }
}

export default Home;