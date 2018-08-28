import React from 'react';
import Card from './logos/Card';



const Squares = props => {
  const squareArr = [];
  for (var i = 0; i <= 9 ; i++) {
    for (var j = i; j <= 9 ; j++) {
      if (i===3 && j===7) {
        squareArr.push(<Card className={'pagebreak'} team1={props.team1} team2={props.team2} score1={i} score2={j}/>)
        squareArr.push(<div style={{height: "150px", left: 0, right: 0, width: "100%"}}></div>)
      } else {
      squareArr.push(<Card team1={props.team1} team2={props.team2} score1={i} score2={j}/> )
      }
    }
  }
  return squareArr
}

export default Squares
