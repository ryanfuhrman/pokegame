import React, { Component } from "react";
import "./Pokecard.css";

const POKE_IMG_URL =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

export default class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;

    const ThreeDigitPad = id => {
      if (id < 10) {
        return `00${id}`;
      } else if (id < 99) {
        return `0${id}`;
      } else {
        return id;
      }
    };

    const poke_img = `${POKE_IMG_URL}${ThreeDigitPad(id)}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img className="Pokecard-img" src={poke_img} alt={name} />
        <p className="Pokecard-type">Type: {type}</p>
        <p className="Pokecard-exp">EXP: {exp}</p>
      </div>
    );
  }
}
