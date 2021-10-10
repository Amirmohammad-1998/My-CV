import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import "./card.css";

export default function Cards({info}) {
    return (
        
        <>
            {info.map((card)=>{
                return(
                    <Card className="card" >
                        <Typography variant="h4"  className="title" id={card.id}>{card.title}</Typography>
                        <Typography className="desc" >
                           {card.desc}
                        </Typography>
            </Card>
                )
            })}
           

        </>            
    )
}
