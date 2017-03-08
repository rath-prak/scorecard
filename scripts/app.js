import React from 'react';
import ReactDOM from 'react-dom';

// import Players from './components/Players'

class Application extends React.Component{
  render (){
    return (
      <div className="scoreboard">
        <header className="header">
          <h1>Game Scorecard</h1>
        </header>

        <div className="players">
          <div className="player">
            <div className="player-name">Harvestor Of Sorrow</div>
            <div className="player-score">
              <div className="counter">
                <buttom className="counter-action decrement"> - </buttom>
                <div className="counter-score">56</div>
                <buttom className="counter-action increment"> + </buttom>
              </div>
            </div>
          </div>
        </div>

        <div className="players">
          <div className="player">
            <div className="player-name">Wolfman</div>
            <div className="player-score">
              <div className="counter">
                <buttom className="counter-action decrement"> - </buttom>
                <div className="counter-score">52</div>
                <buttom className="counter-action increment"> + </buttom>
              </div>
            </div>
          </div>
        </div>

        <div className="players">
          <div className="player">
            <div className="player-name">Butter Bean</div>
            <div className="player-score">
              <div className="counter">
                <buttom className="counter-action decrement"> - </buttom>
                <div className="counter-score">46</div>
                <buttom className="counter-action increment"> + </buttom>
              </div>
            </div>
          </div>
        </div>

      {/* end of main application */}
      </div>
    )
  }
}


const container =  document.getElementById('container');
ReactDOM.render(<Application />, container );
