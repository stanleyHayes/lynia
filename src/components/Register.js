import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader , CardContent,CardActions, TextField, Checkbox, Typography, Button} from '@material-ui/core';
import { colors } from '../utils/colors';



export default function RegisterComponent(props) {


    const onChange = (e) =>{
        console.log(e.target.name, e.target.value)
    };

    const [fullname, setFullname] = useState("");
    const [email, setEmaiil] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwrordMatchError, setPasswordMatchError] = useState(false);

    useEffect(()=>{
        if(password !== confirmPassword){
            setPasswordMatchError(true);
        }else{
            setPasswordMatchError(false);
        }
    })

    const styles = useStyles();

    return (
        <div>

            <Card className={styles.card}>
                <CardHeader className={styles.header} title="Create account" subheader="Create an account to get started" />

                <CardContent className={styles.input}>


                    <div style={{margin:16, fontSize:14}}>
                        <TextField value={fullname} id="fullname" name="fullname" fullWidth label="Full name" margin="dense" type="text" variant="outlined" placeholder="e.g Archibold Bernard"
                                   onChange={(e)=>setFullname(e.target.value)}
                        />
                    </div>

                    <div style={{margin:16, fontSize:14}}>
                        <TextField value={email} id="email" name="email" fullWidth label="Email Address" margin="dense" type="email-address" variant="outlined" placeholder="Enter email address"
                                   onChange={(e)=>{
                                       setEmaiil(e.target.value )
                                   }}
                        />
                    </div>



                    <div style={{margin:16, fontSize:14}}>
                        <TextField value={phone} id="phone" name="phone" fullWidth label="Phone number" margin="dense" type="phone" variant="outlined" placeholder="e.g 027 189 8933"
                                   onChange={(e)=> setPhone(e.target.value)}
                        />
                    </div>

                    <div style={{margin:16, fontSize:14}}>
                        <TextField value={password} id="password" name="password" fullWidth label="Password" placeholder={"* * * * * * *"} margin="dense" type="password" variant="outlined"
                                   onChange={e => setPassword(e.target.value)}/>
                    </div>


                    <div style={{margin:16, fontSize:14}}>
                        <TextField error={passwrordMatchError} id="confirmpassword" name="confirmpassword" placeholder={"* * * * * * *"} fullWidth label="Confirm Password" margin="dense" type="password" variant="outlined"
                                   onChange={e=>setConfirmPassword(e.target.value)}/>
                    </div>

                    <CardActions>
                        <Button color={"primary"} fullWidth variant={"contained"} className={styles.button}>
                            CREATE ACCOUNT
                        </Button>
                    </CardActions>
                    <Typography  color={"secondary"}>Login to account</Typography>
                </CardContent>

            </Card>
        </div>
    )
}



const useStyles = makeStyles( theme => ({
    card: {
        maxWidth: 650,
        minWidth:600,
        padding:16
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    header: {
        color: colors.header,
        fontWeight:'bold'
    },
    input: {
        padding: '8px 16px',
    },
    button: {
        width:'100%'
    },
}));