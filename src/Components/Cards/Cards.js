import React from 'react';
import Img from './../../img/frontend-icon.svg';
import './Cards.css'

export default class Card extends React.Component {

    state = {
        cards: [
            {
                key: 1,
                img: { Img },
                title: "Card 1",
                skills: []
            },
            {
                key: 2,
                img: { Img },
                title: "Card 2",
                skills: []
            },
            {
                key: 3,
                img: { Img },
                title: "Card 3",
                skills: []
            }
        ]
    }

    render(){
        const cards = this.state.cards.map(card => 

            <div className="card">
                <div className="card__container">
                    <div className="card__Img">
                        <img src={card.img} />
                    </div>
                    <div className="card__list">
                        <h3> {card.title} </h3>
                        <ul>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
        return (
            <div>
                {cards}
            </div>
        )
    }

}