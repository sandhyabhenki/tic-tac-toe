import React from 'react'
import { Link } from 'react-router-dom'
import { Storage } from './../storage/storage'

export class Scoreboard extends React.Component{
    state = {
        scoreboard : []
    }


async componentDidMount() {
    let storage = await new  Storage().getData()

    this.setState({
        scoreboard: storage
    })
}

render(){
    return(
        <div className="game">
        {/* <h1>Recent games:</h1> */}
        {/* <h1>Hey!Sandhya here..</h1> */}
       
        {/* <input type="text" placeholder="Enter your name..." id="myInput">
        <button type="button" onclick="getInputValue();">Submit</button>
       */}
        <h2>Lets Play One Game</h2>

                {/* List with previous games */}
        <ul>
          {this.state.scoreboard.map((leader, key) => {
            return <li key={key}>{leader}</li>
          })}
        </ul>

                {/* Link to start new game */}
        <Link to="/board">
          <button className="btn">Start a game</button>
        </Link>
      </div>
    )
}

}