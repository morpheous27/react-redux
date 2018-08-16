import React, { Component } from "react";
import { render } from "react-dom";

const HEROES = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];
class Heroes extends Component {
  state = {
    heroes: HEROES
  };
  onSelect = hero => {
    console.log(hero);
  };
  render() {
    const { heroes } = this.state;
    return (
      <div>
        <ul>
          {heroes.map((hero, index) => {
            return (
              <li onClick={() => this.onSelect(hero)} key={index}>
                {hero.id}
                {hero.name}
              </li>
            );
          })}
        </ul>
        <div>
          <h1>Hero Details</h1>
        </div>
      </div>
    );
  }
}

render(<Heroes />, root);
