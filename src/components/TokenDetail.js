import React, {useState} from "react"
import taken from "../../src/assets/images/mediaplayer.svg"
import {colors} from "../utils/colors";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import {makeStyles} from "@material-ui/core";
import {getRandomColor} from "../utils/functions";

export const TokenDetail = (props) => {





    const classes = useStyles();

    function handleDelete() {
        alert('You clicked the delete icon.');
    }

    function handleClick() {
        alert('You clicked the Chip.');
    }

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
                       backgroundColor:'rgba(20,20,20,0.2)',
                       alignItems:'center',
                       paddingLeft:32,
                       flexDirection:'row'
                   }}>
                       <div style={{height:60, width:60, backgroundColor:'red', borderRadius:30, margin:8}}>

                       </div>
                       <div style={{display:'flex', flexDirection:'column', alignItems :'flex-start'}}>
                           <strong style={{fontSize:18, color:'teal'}} >{props.active}</strong>
                           <span>Time created</span>
                       </div>

                   </div>

               </div>
            </div>
            <div style={{minHeight:'50vh', backgroundColor:'ghostwhite',  padding:8}}>

                <div style={styles.wrapper}>

                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Type</span>
                        <div className={classes.type}>{"This div's text looks like that of a button."}</div>
                    </div>


                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Pricing</span>

                    </div>
                </div>


                <div style={styles.wrapper}>

                    <div style={{...styles.container}}>
                        <span style={styles.item_header}>Add Ons</span>
                        <div style={{height:'100%', width:'100%' }}>
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />}
                                label="Transport"
                                className={classes.chip}
                            />

                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />}
                                label="Deletable Chip"
                                className={classes.chip}
                            />

                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />}
                                label="Breakfast"
                                className={classes.chip}
                            />
                        </div>
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
        flexDirection:'column'

    },
    item_header:{
        color:colors.header,
        fontWeight:'bold'
    }
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing(1),
        color:'white',
        backgroundColor:getRandomColor(),
    },

    type: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        textAlign:'center'
    },
}));