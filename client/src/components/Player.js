import React from 'react';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage.js';

const PlayerD = styled.div`
width: 500px;
background-color: green;
color: white;
font-weight: bold;
margin: 0 auto;
`

function Player (props) {
    const useInput = (key, initialValue) => {
        const [value, setValue] = useLocalStorage(key, initialValue);
        const handleChanges = updatedValue => {
          setValue(updatedValue);
        };
        return [value, setValue, handleChanges];
      };

      const [username, setUsername, handleUsername] = useInput("userName", "");
const [password, setPassword, handlePassword] = useInput("password", "");
const [email, setEmail, handleEmail] = useInput("email", "");



    return (
        <div>
            
            <PlayerD>
                <h1>{props.player.name}</h1>
                <p>{props.player.country}</p>
                <p>{props.player.searches}</p>
            </PlayerD>
        </div>
    )
}

export default Player;