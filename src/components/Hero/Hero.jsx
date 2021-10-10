import React from 'react';
import "./hero.css";
import shuttle from "../../image/shuttle2.jpg";

export default function Hero() {
    return (
        <div className="hero">
           <img src={shuttle}  alt='' />
        </div>
    )
}
