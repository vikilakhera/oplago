import React, {useState, useEffect} from 'react';
import './common.css';
import { cardDetails } from './cardDetails';
import Header from './header';

function Card () {
    const [index, setIndex] = useState(0);
    const [slide, setSlide] = useState("");

    useEffect(() => {
        setTimeout(test, 600);
    },[index])

    const test = () => {
        setSlide("");
    }

    const next = () =>{
        setSlide("slidein")
        if(index === 1){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }

    return(
        <>
            <Header next={next} />
            <div className="all-cards">
                {
                    cardDetails[index].map(card => {
                        return(
                            <div className={`card-container ${slide}`}>
                                <div className="img-container">
                                    <img src={card.image} alt={card.name} />
                                </div>
                                <div className="img-info">
                                    <div className={`time-left ${card.class}`}><i className="far fa-clock"></i>{card.timeLeft}</div>
                                    <div className="padding">
                                        <div className="card-name">{card.name}</div>
                                        <div className="footer-elements"><i className="fab fa-youtube"></i>{card.classes}</div>
                                        <div className="footer-container">
                                            <div><i className="fa fa-bookmark"></i>{card.questions}</div>
                                            <div><i className="fa fa-sticky-note"></i>{card.notes}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card;