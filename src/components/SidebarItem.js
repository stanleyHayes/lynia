import React, {useState, useEffect} from 'react';

import {Card, Grid, makeStyles, Avatar, Typography, Icon} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    
    card:{
        maxWidth: 250,
        textAlign: "left",
        padding: 10,
        margin:4
    },
    card_active:{
        maxWidth: 250,
        textAlign: "left",
        padding: 10,
        margin:4,
        backgroundColor: 'whitesmoke'
    }
})
)

function SidebarItem(props){

    const classes = useStyles();

    const [active, setActive] = useState("token");

    return (
        <div style={{overflowY:'scroll', backgroundColor:'gainsboro'}}>
            <Card
                onClick={
                    ()=> {
                        props.setId("tokens");
                        setActive("token")
                    }
                }
                className={active === 'token' ? classes.card_active :classes.card}>
                <Typography variant="h6" color="default">
                    Tokens
                </Typography>

                <Typography variant="caption">
                    55 tokens
                </Typography>

            </Card>

            <Card
                onClick={
                    ()=> {
                        props.setId("merchant");
                        setActive("merchant")
                    }
                }
                className={active === 'merchant' ? classes.card_active :classes.card}>
                <Typography variant="h6" color="default">
                    Merchant
                </Typography>

                <Typography variant="caption">
                    55 tokens
                </Typography>

            </Card>

            <Card
                onClick={
                    ()=> {
                        props.setId("category");
                        setActive("category")
                    }
                }
                className={active === 'category' ? classes.card_active :classes.card}>
                <Typography variant="h6" color="default">
                    Categories
                </Typography>

                <Typography variant="caption">
                    55 tokens
                </Typography>

            </Card>


            <Card
                onClick={
                    ()=> {
                        props.setId("my-tokens");
                        setActive("my-tokens")
                    }
                }
                className={active === 'my-tokens' ? classes.card_active :classes.card}>
                <Typography variant="h6" color="default">
                    My Tokens
                </Typography>

                <Typography variant="caption">
                    55 tokens
                </Typography>

            </Card>



            <Card
                onClick={
                    ()=> {
                        props.setId("account");
                        setActive("account")
                    }
                }
                className={active === 'account' ? classes.card_active :classes.card}>
                <Typography variant="h6" color="default">
                    Account
                </Typography>

                <Typography variant="caption">
                    View profile
                </Typography>

            </Card>


            <Card
                onClick={
                    ()=> {
                        props.setId("dormant");
                        setActive("dormant")
                    }
                }
                className={active === 'dormant' ? classes.card_active :classes.card}>
                <Typography variant="h6" color="default">
                    Dormant Token
                </Typography>

                <Typography variant="caption">
                    55 tokens
                </Typography>

            </Card>

            <Card
                onClick={
                    ()=> {
                        props.setId("active");
                        setActive("active")
                    }
                }
                className={active === 'active' ? classes.card_active :classes.card}>
                <Typography variant="h6" color="default">
                   Active Tokens
                </Typography>

                <Typography variant="caption">
                    55 tokens
                </Typography>

            </Card>


            <Card
                onClick={
                    ()=> {
                        props.setId("used");
                        setActive("used")
                    }
                }
                className={active === 'used' ? classes.card_active :classes.card}>
                <Typography variant="h6" color="default">
                   Used Tokens
                </Typography>

                <Typography variant="caption">
                    55 tokens
                </Typography>

            </Card>


        </div>
    )
}

export default SidebarItem;