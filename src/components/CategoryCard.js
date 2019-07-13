import React from 'react'
import {Card, CardMedia, Button, CardContent, Typography, CardActions, Divider} from "@material-ui/core";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 350
    }
});


function CategoryCard(props){
    const classes = useStyles();
    return (
        <Card className={classes.card}>
                <CardMedia component="img" height="200" 
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />
                <Divider />
            <CardContent>
                <Typography component="h2" variant="h5">
                    Hospitality
                </Typography>
                <Typography gutterBottom component="h2" variant="body1">
                    150 tokens
                </Typography>
                <Typography component="p" variant="body2">
                    For your relaxation and vacations, give yourself a first-class treatment with a hospitality token. You deserve it
                </Typography>
            </CardContent>
            <Divider />
            <CardActions>
                <Button variant="small" color="primary">
                    View tokens
                </Button>
            </CardActions>
        </Card>
    );
}

export default CategoryCard;