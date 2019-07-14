import React from 'react'
import { Container, Card, CardHeader, CardContent, CardActionArea, Button, CardMedia, Typography, Divider, Grid, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Select, MenuItem, Checkbox, TextField } from '@material-ui/core';
import {spacing} from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        justifyContent: "flex-start"
    },
    container: {
        maxWidth: "80%",
        margin: "auto"
    },
    dormant:{
        flexGrow: 1
    },
    dormantContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});

function CreateToken(props){

    const classes = useStyles();

    return (
        <Container className={classes.container}>
                    <img 
                    height="50%"
                    width="100%"
                    src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />
                    
                            <FormControl 
                                style={{margin: 10}}
                                gutterBottom 
                                fullWidth component="fieldset">

                                <FormLabel component="legend">
                                    Pricing
                                </FormLabel>

                                <RadioGroup
                                    defaultValue="discount"
                                    name="pricing"
                                    onChange={()=>{}}
                                    >

                                <Grid container justify="start">
                                    <Grid item xs={12} md={6}>
                                        <FormControlLabel 
                                            value="open" 
                                            label="Open" 
                                            control= {<Radio />} />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <FormControlLabel 
                                            value="discount" 
                                            label="Discount" control={<Radio/>}
                                    />
                                    </Grid>
                                </Grid>

                                </RadioGroup>
                               
                            </FormControl>

                    <Divider style={{margin: 20}}/>

                    <FormControl
                        style={{margin: 10}} 
                        component="fieldset">

                        <FormLabel 
                            style={{margin: 10}} 
                            component="legend">
                            Type
                        </FormLabel>

                        <Select
                            displayEmpty={true}
                            variant="filled"
                            >
                            <MenuItem>Event</MenuItem>
                            <MenuItem>Hospitality</MenuItem>
                            <MenuItem>Health</MenuItem>
                            <MenuItem>Short Course</MenuItem>
                            <MenuItem>Money</MenuItem>
                        </Select>

                    </FormControl>

                        <Divider style={{margin: 20}}/>

                    <FormControl 
                        style={{margin: 10}}
                        fullWidth
                        component="fieldset">
                            <FormLabel component="legend">Service Package</FormLabel>

                            <Grid container justify="flex-start" className={classes.root}>
                                <Grid item>

                                <FormControlLabel 
                                    control={
                                        <Checkbox 
                                            onChange={()=>{}}
                                        />}
                                    label="Singles"
                                />
                                </Grid>
                            
                                <Grid>
                                    <FormControlLabel
                                        control={<Checkbox
                                            onChange={()=>{}}
                                            />}
                                        label="Group"
                                    />
                                </Grid>
                            </Grid>
                    </FormControl>


                    <Divider style={{margin: 20}}/>

                    <FormControl 
                        style={{margin: 10}}
                        fullWidth
                        component="fieldset">
                        <FormLabel component="legend">Security Check-in</FormLabel>

                        <Grid container>
                            <Grid item>

                                <FormControlLabel 
                                    control={
                                    <Checkbox 
                                        onChange={()=>{}}
                                    />}
                                    label="Passport"
                                    />

                            </Grid>

                            <Grid item>
                                <FormControlLabel
                                    control={<Checkbox
                                    onChange={()=>{}}
                                    />}
                                    label="Voters ID"
                                />
                            </Grid>
                        </Grid>
                    </FormControl>
                    
                    <Divider style={{margin: 20}}/>

                    <FormControl 
                        fullWidth
                        component="fieldset">
                                <FormLabel component="legend" style={{margin: 10}}>
                                    Availability
                                </FormLabel>

                                <RadioGroup
                                    defaultValue="yearly"
                                    name="availability"
                                    onChange={()=>{}}
                                    >

                            <Grid container>

                                <Grid item>
                                    <FormControlLabel 
                                    value="yearly" 
                                    label="All year round" 
                                    control= {<Radio />} />
                                </Grid>

                                <Grid item>
                                    <FormControlLabel 
                                        value="months" 
                                        label="Months" 
                                        control= {<Radio />} />
                                </Grid>

                                <Grid item>

                                    <FormControlLabel 
                                        value="holidays" 
                                        label="Holidays" 
                                        control= {<Radio />} />
                                    </Grid>

                                <FormControlLabel 
                                    value="weekends" 
                                    label="Weekends" 
                                    control= {<Radio />} />

                                <Grid item>
                                    <FormControlLabel 
                                        value="weekdays" 
                                        label="Weekdays" 
                                        control= {<Radio />} />
                                </Grid>

                                <Grid item> 
                                    <FormControlLabel 
                                        value="date" 
                                        label="Specific Dates" 
                                        control= {<Radio />} />
                                </Grid>
                            </Grid>

                                </RadioGroup>
                               
                            </FormControl>
                    <Divider style={{margin: 20}}/>

                    <FormControl 
                    style={{margin: 10}}
                    fullWidth
                    component="fieldset">
                        <FormLabel style={{margin: 10}} component="legend">Dormant Mode</FormLabel>

                        <Grid container className={classes.dormantContainer}>
                            <Grid item className={classes.dormant}>
                            <TextField label="Number" variant="outlined" placeholder="Number" />

                            </Grid>

                            <Grid item className={classes.dormant}>
                            <Select
                        displayEmpty={true}
                        variant="filled"
                        >
                            <MenuItem>Days</MenuItem>
                            <MenuItem>Weeks</MenuItem>
                            <MenuItem>Months</MenuItem>
                            <MenuItem>Years</MenuItem>
                        </Select>
                            </Grid>
                        </Grid>
                        
                       
                    </FormControl>

                    <Divider style={{margin: 20}}/>

                    <FormControl 
                    style={{margin: 10}}
                    fullWidth
                    component="fieldset">
                        <FormLabel 
                        style={{margin: 10}} 
                        component="legend">
                            Add Ons
                        </FormLabel>

                        <TextField 
                        fullWidth
                        style={{margin: 10}}
                        variant="outlined" 
                        label="Name" 
                        placeholder="Name" />

                    <TextField 
                    style={{margin: 10}}
                    fullWidth={true}
                        variant="outlined" 
                        label="Price" 
                        placeholder="Price" />

                    <TextField 
                    fullWidth
                    style={{margin: 10}}
                        variant="outlined" 
                        label="Description" 
                        placeholder="Description" />
                    </FormControl>

                    <Divider style={{margin: 20}}/>

                    <FormControl 
                    style={{margin: 10}}
                    fullWidth
                    component="fieldset" >

                        <FormLabel 
                        style={{margin: 10}} 
                        component="legend">
                            Token Description
                        </FormLabel>

                        <TextField 
                    fullWidth 
                    variant="outlined" 
                    placeholder="Description" 
                    label="Description" />

                    </FormControl>
                    
                    <Divider style={{margin: 20}}/>

                    <Button 
                    color="primary"
                    style={{margin: 10, mx: 30}} 
                    variant="contained">
                        Create Token
                    </Button>

        </Container>
    );
}

export default CreateToken;