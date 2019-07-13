import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader , CardContent,CardActions, TextField, Checkbox, Typography, Button} from '@material-ui/core';
import { colors } from '../utils/colors';
import { Link }  from "react-router-dom";



export default function LoginComponent(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        //console.log(email, password);
    })


 const onChange = (e) =>{
     console.log(e.target.name, e.target.value)
  }


  const styles = useStyles();

  return (
    <div>
      
      <Card className={styles.card}>
        <CardHeader className={styles.header} title="Login" subheader="Enter correct credentials to login" />

        <CardContent className={styles.input}>
          <div style={{margin:12, fontSize:14}}> 
          <TextField value={email} id="email" name="email" fullWidth label="Email Address" margin="dense" type="email-address" variant="outlined" placeholder="Enter email address"
           onChange={(e)=>{
               setEmail(e.target.value)
           }}
          />
          </div>
          
          <div style={{margin:12, fontSize:14}}>
          <TextField value={password} id="password" name="password" fullWidth label="Password" margin="dense" type="password" variant="outlined"
                     onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>

          <div style={{display:'flex', flex:1,  flexDirection:'row', justifyContent:'flex-end', alignItems:'center', marginRight:12, color:'teal'}}>
            <Checkbox color={colors.header}/> <Typography>Remember me</Typography>
          </div>
            <br/>

            <CardActions>
                <Button color={"primary"} fullWidth variant={"contained"} className={styles.button}>
                    LOGIN
                </Button>
            </CardActions>

            <Link to={"/register"}>
                <Button  variant={"text"}>
                    <Typography  color={"secondary"}>Create account</Typography>
                </Button>
            </Link>
        </CardContent>

      </Card>
    </div>
  )
}



const useStyles = makeStyles( theme => ({
  card: {
    maxWidth: 450,
    minWidth:400,
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