import React from 'react';
import Img from './../../img/frontend-icon.svg';
//import html from './../../img/icons/html5.svg'
import './Cards.css';

export default class Card extends React.Component {

    state = {
        cards: [
            {
                key: 1,
                img:  Img ,
                title: "HTML",
                skills: ['HTML 5','Web Components','Bootstrap']
            },
            {
                key: 2,
                img:  Img ,
                title: "CSS",
                skills: ['SASS','BEM', 'CSS Animations']
            },
            {
                key: 3,
                img:  Img ,
                title: "Javascript",
                skills: ['ES6','AJAX','RESTful APIs']
            }
        ]
    }

    render(){
        const cards = this.state.cards.map(card =>

           
                <div key={card.key} className="card">
                    <div className="card__container">
                        <div className="card__Img">
                            <img src={card.img} />
                        </div>
                        <div className="card__list">
                            <h3> {card.title} </h3>
                            <ul>
                                {(
                                    card.skills.map((skill,index)=>{
                                        return <li key={index}>{skill}</li>
                                    })
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
          
        )
        return (
            <div className="skills__cards">
                {cards}
            </div>
        )
    }

}