import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    const shuffledPokemon = shuffle(this.props.pokemon);

    function makeTeams(array) {
      const teamA = array.slice(0, 4);
      const teamB = array.slice(4, array.length);

      return [[...teamA], [...teamB]];
    }

    const teams = makeTeams(shuffledPokemon);

    function calculateWinner(array) {
      const teamAExp = [],
        teamBExp = [];
      const reducer = (totalExp, currentExp) => totalExp + currentExp;
      array[0].map(p => teamAExp.push(p.base_experience));
      array[1].map(p => teamBExp.push(p.base_experience));

      const teamATotal = teamAExp.reduce(reducer);
      const teamBTotal = teamBExp.reduce(reducer);

      return teamATotal > teamBTotal ? true : false;
    }

    return (
      <div className="Pokegame">
        <h1>Pokegame</h1>
        <div className="Pokegame-teamA Pokegame-teams">
          <div className="Pokegame-rosters">
            <Pokedex
              roster={teams[0]}
              title="Team A"
              isWinner={calculateWinner(teams)}
            />
          </div>
        </div>
        <div className="Pokegame-teamB Pokegame-teams">
          <div className="Pokegame-rosters">
            <Pokedex
              roster={teams[1]}
              title="Team B"
              isWinner={!calculateWinner(teams)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pokegame;
