import React from "react";
import CardContaxt from "./CardContext";
 const CardContaxtProvider=({children})=>{
    const [card,setCard]=React.useState(null)
    return(
        <CardContaxt.Provider value={{card,setCard}}>
            {children}
        </CardContaxt.Provider>
    )
 }