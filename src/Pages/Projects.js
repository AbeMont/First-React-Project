import React from 'react';
import Header from "./../Components/Header/Header";
import Tabs from "./../Components/Tabs/Tabs";


export default class Projects extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <h1 style={{marginTop:86}}>Projects Page</h1>
                <h2>Working on it...</h2>
                <Tabs />
            </div>
        )
    }
}