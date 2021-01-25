import React, { Component } from 'react';
import "./style.css";

interface AppProps { }
interface AppState { }

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <h1>Rock, paper, scissors game</h1>
        <ol>
          <li>Implement game logic in game.js</li>
          <li>Implement primitive UI for player to choose their move</li>
          <li>Implement primitive UI to show the game results</li>
          <li>
            Make UI look nice (use IconButton and provided png files to select the
            move; show computer move in a Card, show game result in an Alert)
          </li>
        </ol>
      </div>
    );
  }
}
