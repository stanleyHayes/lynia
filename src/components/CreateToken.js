import React from 'react'
import { Container, Card, CardHeader, CardContent, CardActionArea, Button, CardMedia, Typography, Divider, Grid, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Select, MenuItem, Checkbox, TextField } from '@material-ui/core';


function CreateToken(props){
    return (
        <Container spacing={10}>
            <Card spacing={10}>
                    <CardMedia 
                    height="400"
                    component="img"
                    src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />
                    
                
                <CardContent>
                    
                            <FormControl component="fieldset">
                                <FormLabel component="legend">
                                    Pricing
                                </FormLabel>

                                <RadioGroup
                                defaultValue="discount"
                                name="pricing"
                                onChange={()=>{}}
                                >
                                <FormControlLabel 
                                value="open" 
                                label="Open" 
                                control= {<Radio />} />

                                <FormControlLabel 
                                value="discount" 
                                label="Discount" control={<Radio/>}
                                />

                                </RadioGroup>
                               
                            </FormControl>
                    <Divider />

                    <FormControl component="fieldset">
                        <FormLabel component="legend">
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
                        <Divider />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Service Package</FormLabel>

                        <FormControlLabel 
                        control={
                        <Checkbox 
                            onChange={()=>{}}
                        />}
                        label="Singles"
                        />

                        <FormControlLabel
                        control={<Checkbox
                            onChange={()=>{}}
                            />}
                            label="Group"
                        />
                    </FormControl>


                    <Divider />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Security Check-in</FormLabel>

                        <FormControlLabel 
                        control={
                        <Checkbox 
                            onChange={()=>{}}
                        />}
                        label="Passport"
                        />

                        <FormControlLabel
                        control={<Checkbox
                            onChange={()=>{}}
                            />}
                            label="Voters ID"
                        />
                    </FormControl>
                    
                    <Divider />

                    <FormControl 
                    component="fieldset">
                                <FormLabel component="legend">
                                    Availability
                                </FormLabel>

                                <RadioGroup
                                defaultValue="yearly"
                                name="availability"
                                onChange={()=>{}}
                                >
                                <FormControlLabel 
                                value="yearly" 
                                label="All year round" 
                                control= {<Radio />} />

                            <FormControlLabel 
                                value="months" 
                                label="Months" 
                                control= {<Radio />} />

                            <FormControlLabel 
                                value="holidays" 
                                label="Holidays" 
                                control= {<Radio />} />

                            <FormControlLabel 
                                value="weekends" 
                                label="Weekends" 
                                control= {<Radio />} />

                            <FormControlLabel 
                                value="weekdays" 
                                label="Weekdays" 
                                control= {<Radio />} />

                            <FormControlLabel 
                                value="date" 
                                label="Specific Dates" 
                                control= {<Radio />} />


                                </RadioGroup>
                               
                            </FormControl>
                    <Divider />

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Dormant Mode</FormLabel>

                        <Grid container>
                            <Grid item>
                            <TextField label="Number" variant="outlined" placeholder="Number" />

                            </Grid>

                            <Grid item>
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

                    <Divider />

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Add Ons</FormLabel>

                        <TextField 
                        fullWidth
                        variant="outlined" 
                        label="Name" 
                        placeholder="Name" />

                    <TextField 
                    fullWidth
                        variant="outlined" 
                        label="Price" 
                        placeholder="Price" />

                    <TextField 
                    fullWidth
                        variant="outlined" 
                        label="Description" 
                        placeholder="Description" />
                    </FormControl>

                    <Divider />

                    <FormControl component="fieldset">
                        <FormLabel>Token Description</FormLabel>
                        <TextField 
                    fullWidth 
                    variant="outlined" 
                    placeholder="Description" 
                    label="Description" />

                    </FormControl>
                    
                    <Divider />
                    <Button variant="outlined">
                        Create Token
                    </Button>

                </CardContent>

            </Card>
        </Container>
    );
}

export default CreateToken;