import React from 'react';
import Player from './Player.js';
import axios from 'axios';

class Players extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
        .then(res => {
            this.setState({players: res.data});
        })
        .catch(err => {
            console.log(err)
        })
    }
     
    render() {
        return (
            <div>
                {this.state.players.map(p => {
                    return <Player player={p} />
                })}
               
            </div>
        )
    }
}

export default Players;