import { UilMoon, UilSun } from '@iconscout/react-unicons';
import React from 'react'
import { useContext } from 'react';
import { themeContext } from '../../contaxt';
import './Toggle.css'
function Toggle() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
      // debugger
      theme.dispatch({ type: "toggle" });
    };
    return (
      <div className="toggle" onClick={handleClick}>
        <UilMoon />
        <UilSun />
      
        <div
          className="t-button"
          style={darkMode ? { left: "2px" } : { right: "2px" }}
        ></div>
      </div>
    );
}

export default Toggle