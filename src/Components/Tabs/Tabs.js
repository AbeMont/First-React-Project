import React from 'react';
import { Link } from 'react-router-dom';
import './Tabs.css';

export default class Tabs extends React.Component {

    state = {
        panel: {
            nav:[
                {
                    id: "button-1",
                    buttonText: "All",
                    value: 'all'
                },
                {
                    id: "button-2",
                    buttonText: "HTML",
                    value: "html"
                },
                {
                    id: "button-3",
                    buttonText: "CSS",
                    value:"css"
                },
                {
                    id: "button-4",
                    buttonText: "JavaScript",
                    value: "javascript"
                },
            ],
            cards:[
                {
                    id: "card-1",
                    img: "https://via.placeholder.com/300x250",
                    cardDescription: "Topic Of html",
                    topic: 'html',
                    showCard: true,
                    animate: true
                },
                {
                    id: "card-2",
                    img: "https://via.placeholder.com/300x250",
                    cardDescription: "A project",
                    topic: 'html',
                    showCard: true,
                    animate: true
                },
                {
                    id: "card-3",
                    img: "https://via.placeholder.com/300x250",
                    cardDescription: "javascript Algorithms",
                    topic: 'javascript',
                    showCard: true,
                    animate: true
                },
                {
                    id: "card-4",
                    img: "https://via.placeholder.com/300x250",
                    cardDescription: "HTTP",
                    topic: "javascript",
                    showCard: true,
                    animate: true
                },
                {
                    id: "card-5",
                    img: "https://via.placeholder.com/300x250",
                    cardDescription: "CSS Animations",
                    topic: "css",
                    showCard: true,
                    animate: true
                },
            ]
        }
    }

    btnHandler = (event)=> {
        let value = event.target.value;
        this.showTopics(value);
    }


    showTopics(btnValue) {

        console.log(`We need to show ${btnValue}`);

        const cardItems = [...this.state.panel.cards];

        const upatedPanels = cardItems.map((card, index) => {
        
            if (card.topic === btnValue) {
                card.showCard = true
            } else if (btnValue === 'all') {
                card.showCard = true
            } else {
                card.showCard = false;
            }

            return card;

        });

        this.setState({upatedPanels})

    }

    test = ()=> {
        console.log("testing....")
    }


    render(){

        return (

            <div className="Tabs">

                <div className="Tabs__nav">
                    <nav>
                        <ul>
                            {
                                this.state.panel.nav.map((navItem,index)=>{
                                    return (
                                        <li key={index}>
                                            <button onClick={this.btnHandler} value={navItem.value}> 
                                                {navItem.buttonText} 
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>

                <div className={"Tabs__panels"}>

                    {
                        this.state.panel.cards.map((card,index)=>{
                            return (
                                
                                card.showCard ? 
                                
                                <Link to="#" className="Tab__panel show" key={index}>
                                    <div className="Tab__panel-img">
                                        <img src={card.img} alt="Placeholder" />
                                    </div>
                                    <div className="Tab__panel-desc">
                                        <h4> {card.cardDescription} </h4>
                                    </div>
                                </Link> : null
                            )
                        })
                    }

                </div>

            </div>

            

        )
    }
}