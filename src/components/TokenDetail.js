import React, {useState} from "react"
import taken from "../../src/assets/images/mediaplayer.svg"
import {colors} from "../utils/colors";


export const TokenDetail = (props) => {

    return(
        <div style={{display:'flex',backgroundColor:'ghostwhite', flexDirection:'column',flex:1}}>
            {/*image section*/}
            <div style={{height:'60vh',
                backgroundImage:"url(https://material-ui.com/static/images/cards/contemplative-reptile.jpg)",
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                position:'relative'
            }}>
               <div style={{height:'100%',display:'flex', flexDirection:'column'}}>
                   <div style={{
                       display:'flex',
                       flex:1

                   }}/>

                   <div style={{
                       display:'flex',
                       height:80,
                       backgroundColor:'rgba(200,200,200,0.8)',
                       alignItems:'center',
                       paddingLeft:32,
                       flexDirection:'row'
                   }}>
                       <div style={{height:60, width:60, backgroundColor:'red', borderRadius:30, margin:8}}>

                       </div>
                       <div style={{display:'flex', flexDirection:'column', alignItems :'flex-start'}}>
                           <strong style={{fontSize:18}} >Owner</strong>
                           <span>Time created</span>
                       </div>

                   </div>

               </div>
            </div>
            <div style={{minHeight:'50vh', backgroundColor:'ghostwhite',  padding:8}}>

                <div style={styles.wrapper}>

                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Type</span>
                    </div>


                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Pricing</span>

                    </div>
                </div>


                <div style={styles.wrapper}>

                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Add Ons</span>
                    </div>


                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Usage</span>

                    </div>
                </div>


                <div style={styles.wrapper}>

                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Availability</span>
                    </div>


                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Dormant mode</span>

                    </div>
                </div>


                <div style={styles.wrapper}>

                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Purchased by</span>
                    </div>


                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Security addition</span>

                    </div>
                </div>


                <div style={styles.wrapper}>

                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Description</span>
                    </div>


                    {/*<div style={{...styles.container}}>*/}
                        {/*<span style={styles.item_header}>Security addition</span>*/}

                    {/*</div>*/}
                </div>



                <div>

                    <button style={{
                        height:40,
                        width:250,
                        backgroundColor:'teal',
                        borderRadius:35,
                        color:'white',
                        border:'none',
                        cursor:'pointer'
                    }}>
                        Purchase token
                    </button>


                    {/*<div style={{...styles.container}}>*/}
                    {/*<span style={styles.item_header}>Security addition</span>*/}

                    {/*</div>*/}
                </div>




            </div>
        </div>
    )
};


const styles = {

    wrapper:{
        display:'flex',
        minHeight:100,
        padding:8
    },
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'white',
        margin:4,
        border:'1px solid gainsboro',
        borderRadius:8,
        padding:8,

    },
    item_header:{
        color:colors.header,
        fontWeight:'bold'
    }
}