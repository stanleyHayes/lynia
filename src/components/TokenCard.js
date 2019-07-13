import React from 'react'
import {Card, CardMedia, Button, CardContent, Typography, CardActions, Divider} from "@material-ui/core";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 350
    }
});


function TokenCard(props){
    const classes = useStyles();
    return (
        <Card className={classes.card}>
                <CardMedia component="img" height="200" 
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />
                <Divider />
            <CardContent>
                <Typography component="h2" variant="h5">
                    Holiday Inn
                </Typography>
                <Typography component="h2" variant="body1">
                    GHS 500
                </Typography>
                <Typography component="p" variant="caption">
                    Hospitality token
                </Typography>
            </CardContent>
            <Divider />
            <CardActions>
                <Button variant="small" color="primary">
                    View detail
                </Button>

                <Button variant="small" color="primary">
                    Buy token
                </Button>
            </CardActions>
        </Card>
    );
}

export default TokenCard;