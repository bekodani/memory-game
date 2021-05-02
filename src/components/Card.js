import React from 'react'
import Array from './Array'

const Card = (prop) => {
    



    return (
        <div className="main-container">
            <div className="card-container">
                {Array.map((card, index) => {
                    return (
                        <div className="card-wrapper" key={index} onClick={(e) => {prop.handleCheck(e)}}>
                            <div className="outer-text"></div>
                            <div className="inner-circle">{<img src={card.img} alt={card.name} id={card.id}></img>}</div>
                            <div className="inner-text">{card.name}</div>
                            <div className="card-outer">
                                <div className="card"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card;
