import React from 'react';
import ReactSVG from 'react-svg'
import "./styles.css"
import GameInfo from './GameInfo.js'

const Card = props => {
  return (
    <div className={`${props.className|| 'card'}`} style={{width: "200px", height: "100.1px", backgroundColor: "powderblue", borderStyle: "dashed", padding: "5px", display: "flex", flexDirection: "column"}}>

      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <ReactSVG path={props.team1} className='team1' svgStyle={{ width: 40, flex: 1, height: 'auto'}}/>
        <GameInfo className='gameinfo'/>
        <ReactSVG path={props.team2} className='team2' svgStyle={{ width: 40, flex: 1, height: 'auto'}}/>
      </div>
      <div style={{display: "flex", flexDirection: "row", marginTop: 20}}>
        <span className='score' style={{flex: 1, textAlign: "center"}}>{props.score1}</span>
        <span className='score' style={{flex: 3, textAlign: "center"}}> - </span>
        <span className='score' style={{flex: 1, textAlign: "center"}}>{props.score2}</span>
      </div>


    </div>
  )
}

export default Card
