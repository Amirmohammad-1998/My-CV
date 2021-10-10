import React from 'react';
import "./sidebar.css";
import image from "../../image/profileImage.png";


export default function Sidebar({info }) {

    
    return (
        <div  className="sidebar">
            <div className="imageContainer">
                <img src={image} alt="" />
            </div>
           
            <h2>Amirmohammad neyzan hosseini</h2>
            <ul className="list">
                {info.map((item)=>{
                    return <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>
                    
                })}
                
               
            </ul>
            
        </div>
    )
}
