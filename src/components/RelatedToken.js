import React from 'react';

import {Card, Grid, makeStyles, Avatar, Typography, Icon} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    avatar: {
        width: 50,
        height: 50,
        display:"inline"
    },
    card:{
        maxWidth: 250,
        padding: 4,
        margin:4
    },
    innerGrid: {
        flexDirection: "column",
        textAlign: "left",
        flexGrow: 1
    },
    root: {
        display: "flex",
        flexDirection:"row"
    }
})
)

function RelatedToken(props){

    const classes = useStyles();

    return (
       <div style={{overflowY:'scroll'}}>
           {
               ["Welcome Token", "Home Token", "Swimming", "Football", "Basketball", "LinkedIn"].map(item=>{
                   return(
                       <Card
                           onClick={()=> props.setRelatedToken(item)}
                           className={classes.card}>
                           <Grid container className={classes.root}>

                               <Grid item>
                                   <Avatar
                                       className={classes.avatar}
                                       src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />
                               </Grid>

                               <Grid container item className={classes.innerGrid}>

                                   <Typography variant="h5" color="primary">
                                       {item}
                                   </Typography>

                                   <Typography variant="body2">
                                       GHS 500
                                   </Typography>

                                   <Typography variant="caption" color="default">
                                       Hospitality
                                   </Typography>

                               </Grid>

                           </Grid>

                       </Card>
                   )
               })
           }
       </div>
    )
}

export default RelatedToken;