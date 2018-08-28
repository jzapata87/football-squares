import React, { Component } from 'react';
import './App.css';
import arr from './logos/index.js'
import ReactSVG from 'react-svg'
import Squares from './Squares'

class App extends Component {
  state = {
    team1: "",
    team2: "",
    showTeams: true
  }

  handleClick = e => {

    if (this.state.team1==='') {
        this.setState({team1: e.currentTarget.dataset.path});
    } else if (this.state.team2===''){
      this.setState({team2: e.currentTarget.dataset.path});
      this.setState({showTeams: false})
    } else {
      alert("only two teams can play idiot")
    }
  }


  render() {
    return (

      <div>



        {this.state.showTeams && <div className="App">
          {arr.map(logo => {
            return <ReactSVG data-path={logo} path={logo} svgStyle={{ width: 50, height: 'auto' }} onClick={this.handleClick}/>
          })}
        </div>}
        {!this.state.showTeams && <div className="squaresContainer" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} >
          <Squares team1={this.state.team1} team2={this.state.team2}/>
        </div>}
      </div>
    );
  }
}

export default App;
