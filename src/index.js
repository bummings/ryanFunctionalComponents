import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const karamazovArray = [
  { id: 1, name: "Aloysha"},
  {id: 2, name: "Ivan"},
  {id: 3, name: "Dmitri"}
];

const raskolnikovArray = [
  {id: 4, name: "Rodia"},
  {id: 5, name: "Razumiken"},
  {id: 6, name: "Sonya"}
];

const margaritaArray = [
  {id: 7, name: "Koroviev"},
  {id: 8, name: "Pontius"},
  {id: 9, name: "Margarita"}
];

const animalArray = [
  { id: 1, animalName: "Zebra" },
  { id: 2, animalName: "Giraffe" },
  { id: 3, animalName: "Elephant" },
  { id: 4, animalName: "Stingray" }
];

// functional component- stateless, presentational- no state, no this
function App() {
  return (
    <div className="App">
      <h1>This is a functional component</h1>
      <h3>no state, bruh </h3>
    </div>
  );
}

// this is a functional component to return state
const PropsMessanger = props => {
  return <h1>{props.propsName}</h1>;
};

const FunctionalBrother = props => <p>{props.name}</p>;

const Animal = props => {
  return (
    <div>
      <h3>id: {props.propsId}</h3>
      <h3>name: {props.propsName}</h3>
    </div>
  );
};

// class component- stateful, this
// C C R = Class declaration, constructor, render a return

class Bruh extends React.Component {
  constructor() {
    super();
    // this.state as the control center: pumping state to the PropsMessenger component
    this.state = {
      name: "faux",
      number: 23,
      margarita: margaritaArray,
      animals: animalArray
    };
  }

  // ok so let's clone our state into the animals array
  handleUpdateState = () => {
    // clone our state into this array, so as to not fuck with the original array
    const animals = this.state.animals.slice();
    // push new animal into the animal array
    animals.push({
      id: 5,
      animalName: "Penguin"
    });
    // so then! update the state!
    this.setState({ animals: animals });
  };

  handleInputChange = event => {
    // console.log(event.target.value);
    //update the name state
    this.setState({ name: event.target.value });
  };

  // whenever state changes, the React application re-renders itself, always always always
  // so every time SETSTATE is up in it, you already kno
  render() {
    return (
      <div>
        <h1>LOOK, {this.state.name}</h1>
        {this.state.number !== 666 ? (
          <p>{this.state.number} times I told you</p>
        ) : null}

        {this.state.animals.map(animal => (
          <Animal propsName={animal.animalName} propsId={animal.id} />
        ))}

        {/* so uh, this button is gonna add that penguin to the state animal array? */}
        <button onClick={this.handleUpdateState}>BRUH</button>

        <input
          placeholder="capture this"
          onChange={this.handleInputChange}
          Style="background-color:lightblue"
        />

        {/*pass state props to the propsMessenger component*/}
        <PropsMessanger propsName={this.state.name} />

        {/* two ways of doin it */}
        {/* 
        {karamazovArray.map(brother => (
          <FunctionalBrother name={brother.name} />
        ))}
        <h4>{raskolnikovArray.map(character => <p>{character.name}</p>)}</h4>
        */}

        {/* render the array as a global array */}
        {/*  {margaritaArray.map(character => <h5>{character.name}</h5>)} */}
        {/* or as an array on the state */}
        {this.state.margarita.map(character => <h5>{character.name}</h5>)}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Bruh />, rootElement);
