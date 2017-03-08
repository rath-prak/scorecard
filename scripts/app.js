import React from 'react';
import ReactDOM from 'react-dom';


let PLAYERS = [
  {
    name: "Harvestor Of Sorrow",
    score: 102
  },
  {
    name: "Master Of Puppets",
    score: 105
  },
  {
    name: "Creeping Death",
    score: 135
  },
]
// header

function Header(props){
  return (
    <header className="header">
      <h1>{props.title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

Header.defaultProps = {
  title: "Scorecard 2017"
}

// Counter
function Counter(props){
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score">{props.score}</div>
      <button className="counter-action increment"> + </button>
    </div>
  )
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
}

// player

function Player(props){
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="player-score">
        <Counter score={props.score}/>
      </div>
    </div>
  )
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}


function Application (props){
  return (
    <div className="scoreboard">

      <Header title={props.title}/>

      <div className="players">
        {props.players.map(function(player){
          return <Player name={player.name} score={player.score} />
        })}
      </div>


    {/* end of main application */}
    </div>
  )
};

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  })).isRequired,
}

Application.defaultProps = {
  title: "Scorecard 2017..."
}


const container =  document.getElementById('container');
ReactDOM.render(<Application players={PLAYERS}/>, container );
