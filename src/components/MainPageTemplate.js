import React, {useState, useEffect} from "react"
import {TokenList} from "./TokenList"
import MerchantCard from "./MerchantCard";


export const PageContainer = (props) =>{
    switch (props.id) {
        case "tokens":
            return(
                <div>
                    <div style={{display:'flex', flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
                    <TokenList/>
                </div>
                </div>
            );
        case "merchant":
            return(
                <MerchantCard/>
            )
        default:
            return <p>Main page</p>
    }
};