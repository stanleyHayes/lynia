import React from 'react';

import {Card, Grid, makeStyles, Avatar, Typography, Icon} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    
    card:{
        maxWidth: 250,
        padding: 4,
        textAlign: "left",
        padding: 10
    }
})
)

function SidebarItem(props){

    const classes = useStyles();

    return (
        <Card className={classes.card}>
                    <Typography variant="h6" color="default">
                        Tokens
                    </Typography>

                    <Typography variant="caption">
                        55 tokens
                    </Typography>

        </Card>
    )
}

export default SidebarItem;