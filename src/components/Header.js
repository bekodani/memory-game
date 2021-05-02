import React from 'react'


const Header = (prop) => {



    return (
        <div>
            <div className="header-wrapper">
                <div className="header-container">
                    <p className="title">Jurassic Park Memory Game</p>
                </div>
                <div className="header-container-design-line"></div>
                <div className="score-container">
                    <div className="score-container-wrapper">
                        <div className="score-container-border">
                            <p className="score-text-font">
                            Your score: 
                            <span className="score-num-font">{prop.scoreBoard}</span>
                            </p>
                            <p className="score-text-font">
                            Best score: 
                            <span className="score-num-font">{prop.bestScore}</span>
                            </p>
                        </div>
                    </div>
                </div>
{/*                 <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div> */}
            </div>
        </div>
    )
}

export default Header;
