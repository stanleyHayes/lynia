import React ,{ useState, useEffect} from "react"
import TokenCard from "./TokenCard";



export const TokenList = (props) =>{
    return(

            ["Token 1", "Token 2"].map(item=>{
                return(
                    <TokenCard name={item}/>
                )
            })

    )
};
