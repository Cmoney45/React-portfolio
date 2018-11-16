import React, { Component } from "react";
import PictureCards from "./components/PictureCards";
import Navbar from "./components/NavBar";
import Wrapper from "./components/GameWrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    highScore: 0,
    score: 0,
  }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  render() {


    return (
      <div>
        <Navbar></Navbar>
        <Wrapper>
          <h1 className="title">Friends List</h1>
          {this.state.friends.map(friend => (
          <PictureCards
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        </Wrapper>
      </div>
    );
  }
};

  export default App;
