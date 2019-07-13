import React, {useState, useEffect} from "react"


import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { TokenDetail } from "../components/TokenDetail"
import {colors} from "../utils/colors";


const drawerWidth = 240;

export  const TokensPage = (props) =>{


    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Inbox");

    useEffect(()=>{

    })

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }


    return(
        <div className={classes.root}>
            {/*<CssBaseline />*/}
            {/*<AppBar position="fixed" className={classes.appBar}>*/}
                {/*<Toolbar>*/}
                    {/*<Typography variant="h5" noWrap>*/}
                        {/*Related Tokens - {active}*/}
                    {/*</Typography>*/}
                {/*</Toolbar>*/}
            {/*</AppBar>*/}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <h2 style={{color:colors.header}}>{active}</h2>
                <Divider/>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts','All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem
                            onClick={()=>setActive(text)}
                            style={{
                                backgroundColor:active === text ? 'gainsboro' :'white',
                                color:active === text ? 'teal' :'gray'
                            }}
                            button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <main className={classes.content}>

                <TokenDetail active={active}/>
            </main>
        </div>

    )
};




const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex:1
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: 'teal'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(0),
        width: `calc(100% - ${drawerWidth}px)`
    },
    listitem:{
        backgroundColor: 'yellow'
    }
}));


