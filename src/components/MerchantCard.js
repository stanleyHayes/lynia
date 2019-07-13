import React from 'react'
import {Card, CardMedia, Button, CardContent, Typography, CardActions, Divider} from "@material-ui/core";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 350,
        margin:4
    }
});


function MerchantCard(props){
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
                <Typography component="p" variant="caption">
                    56 different tokens
                </Typography>
            </CardContent>
            <Divider />
            <CardActions>
                <Button variant="small" color="primary">
                    View Tokens
                </Button>

                <Button variant="small" color="primary">
                    View Merchant
                </Button>
            </CardActions>
        </Card>
    );
}

export default MerchantCard;