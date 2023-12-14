import React from "react";
import photo2 from './Images/imgtwo.png'

export default function Headers()    {
    return <div className="header">
        <img src={photo2} alt="Troll img" className="header--img"/>
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
        </div>
}