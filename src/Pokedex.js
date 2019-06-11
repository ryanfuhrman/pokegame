import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  render() {
    const { title, roster, isWinner } = this.props;

    if (isWinner === true) {
    }
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">{title}</h1>
        <div
          className={
            isWinner
              ? "Pokedex-winner Pokedex-roster"
              : "Pokedex-loser Pokedex-roster"
          }
        >
          {roster.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
        {isWinner && <p className="Pokedex-winner-message">THIS HAND WINS!</p>}
      </div>
    );
  }
}
