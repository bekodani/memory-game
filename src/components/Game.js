import React, {useState} from 'react'
import Array from './Array'
import Header from './Header'
import Card from './Card'

const Game = () => {
  const [clickedCards, setClickedCards] = useState([]);
  const [scoreBoard, setScoreBoard] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const Cards = Array;



  const handleCheck = (e) => {
    setClickedCards(
      clickedCards.concat(e.target.alt)
    )

   if(!clickedCards.includes(e.target.alt)) {
      console.log('no')
      handleScore()
      shuffleArray(Cards)
    } else {
      handleBestScore ()
      setClickedCards([])
      setScoreBoard(0)
      shuffleArray(Cards)
    }
  }

  const handleScore = () => {
    setScoreBoard(
      scoreBoard + 1
    )
  }

  const handleBestScore = () => {
    if (scoreBoard > bestScore) {
      setBestScore(
        scoreBoard
      )
    } else {
      return
    }
  }



  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

      var j = Math.floor(Math.random() * (i + 1));
  
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
    }
  
      return array;
  }


  return (
    <div className="game-container">
      <Header 
        scoreBoard={scoreBoard}
        bestScore={bestScore}
      />
    <div className="main">
        <div className="child">
        <Card 
        handleCheck={handleCheck}
      />
        </div>
    </div>
    </div>
  )
}

export default Game;
