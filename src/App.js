import React from "react";
import JokeList from "./JokeList";

class App extends React.Component {
    
  render() {
    console.log(`app`)
    return(
    <div className="App">
      <JokeList />
    </div>
    );
  }
}

export default App;
