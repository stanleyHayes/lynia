import React from 'react';
import { Container, Card, Grid, Typography, Icon, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
    root: {
        flexDirection: "column"
    },
    textItems: {
        flexGrow: 1
    },
    innerGrid: {
        flexDirection: "row",
        padding: 10
    },
    card: {
        margin: 50
    },
})
)

function AccountDetail(props){

    const classes = useStyles();

    return (
        <Container>

            <Card className={classes.card}>
                <Grid container className={classes.root} >
                    <Grid item container className={classes.innerGrid}>
                        <Typography variant="h5" className={classes.textItems}>
                            Stanley Hayford
                        </Typography>
                        <Icon color="action" fontSize="small">edit</Icon>
                    </Grid>

                <Divider />

                <Grid item container className={classes.innerGrid}>
                        <Typography variant="h5" className={classes.textItems}>
                            hayfordstanley@gmail.com
                        </Typography>
                        <Icon color="action" fontSize="small">edit</Icon>
                    </Grid>

                <Divider />

                <Grid item container className={classes.innerGrid}>
                        <Typography variant="h5" className={classes.textItems}>
                            +233270048319
                        </Typography>
                        <Icon color="action" fontSize="small">edit</Icon>
                    </Grid>
            </Grid>
            </Card>

            <Card className={classes.card}>
                <Grid container className={classes.root}>
                    <Grid item container className={classes.innerGrid}>
                        <Typography variant="h5" className={classes.textItems}>
                            Change Password
                        </Typography>
                        <Icon color="action" fontSize="small">edit</Icon>
                    </Grid>

                <Divider />

                <Grid item container className={classes.innerGrid}>
                        <Typography variant="h5" className={classes.textItems}>
                            Logout
                        </Typography>
                        <Icon color="action" fontSize="small">exit_to_app</Icon>
                    </Grid>

                <Divider />

                <Grid item container className={classes.innerGrid}>
                        <Typography variant="h5" className={classes.textItems}>
                            Delete Account
                        </Typography>
                        <Icon color="action" fontSize="small">delete</Icon>
                    </Grid>
            </Grid>
            </Card>
        </Container>
    )
}

export default AccountDetail;