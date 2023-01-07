import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/full-logo-white.png';
import LogoWhite from '../../assets/white-icon.svg';
import menuIconWhite from '../../assets/side-menu-icon-white.png';
import '../../styles/iPad/DrawerIpad.css';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {
    Link
} from "react-router-dom";
import MenuButton from "./MenuButton";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
const drawerWidth = '100%';
const drawerWidthMd = '50%';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        zIndex: 9999999,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        [theme.breakpoints.up('md')]: {
            width: drawerWidthMd,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        textAlign: 'center',
        paddingBottom: '10px',
        height: '80px'
    },
    menuButton: {
        marginRight: theme.spacing(1),
        // [theme.breakpoints.up('sm')]: {
        //     display: 'none',
        // },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#c40046',
        color: '#fff',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    closeMenuButton: {
        align: 'right',
    },
}));
function ResponsiveDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
        setChecked((prev) => !prev);
    }
    const [checked, setChecked] = React.useState(false);
    const drawer = (
        <Container>
            <div className="box-space">
                <Grid container>
                    <Grid item xs={12} sm={6} md={12}>
                        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                            <Typography variant="h4" className="fontStyleTalk">
                              <b> Let's Talk.</b>
                            </Typography>
                        </Slide>

                        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                            <Typography variant="h6" className="fontStyle">
                                Hey@disruptem.com
                            </Typography>
                        </Slide>
                    </Grid>

                    <Grid item xs={12} sm={6} md={12}>
                        <List>
                            <Grid container>
                                    <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                                        <Grid item xs={12} sm={6} md={12} className="Drawer-space">
                                            <Typography variant="h6" onClick={handleDrawerToggle}>
                                                <Link to="/" className="LinkStyle">
                                                    About
                                                </Link>
                                            </Typography>
                                        </Grid>
                                    </Zoom>

                                <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                                        <Grid item xs={12} sm={6} md={12} className="Drawer-space">
                                            <Typography variant="h6" onClick={handleDrawerToggle}>
                                                <Link to="/services" className="LinkStyle">
                                                    Services
                                                </Link>
                                            </Typography>
                                        </Grid>
                                    </Zoom>

                                <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                                        <Grid item xs={12} sm={6} md={12} className="Drawer-space">
                                            <Typography variant="h6" onClick={handleDrawerToggle}>
                                                <Link to="/mvp" className="LinkStyle">
                                                    MVP
                                                </Link>
                                            </Typography>
                                        </Grid>
                                    </Zoom>

                                <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                                    <Grid item xs={12} sm={6} md={12} className="Drawer-space">
                                        <Typography variant="h6" onClick={handleDrawerToggle}>
                                            <a href="#getInTouch" className="LinkStyle">Get In Touch</a>
                                        </Typography>
                                    </Grid>
                                </Zoom>
                            </Grid>
                        </List>
                    </Grid>
                </Grid>
                <Grid container className="Drawer-space-address">
                    <Grid item xs={12} sm={6} md={6}>
                        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                            <Typography variant="subtitle1" className="fontStyle">
                                1605 - 181 Wynford Dr, Toronto,<br/>
                                ON, M3C 0C6 Canada
                            </Typography>
                        </Slide>
                        <br/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                            <Typography variant="subtitle1" className="fontStyle">
                                +1 (647) 633-4368
                            </Typography>
                        </Slide>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
    return (
        <div style={{position: 'absolute', zIndex: 999999+'!important'}}>
            <CssBaseline />
            <AppBar className={classes.appBar} position="fixed" style={{backgroundColor: props.back}}>
                <Grid container>
                    <Grid item xs={2} sm={2}>
                        <Link to="/" className="linkSizing">
                            <img src={logo} className="App-logo-ipad" alt="logo"/>
                        </Link>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <Grid container>
                            <Grid item xs={6} sm={6}>
                                <IconButton color="inherit" style={{marginTop: '48px'}}>
                                    {/*<img src={msgIcon} alt="" className="msgIcon"/>*/}
                                   <span className="get-in-touch"> Get In Touch </span>
                                </IconButton>
                                <span className="line-style"></span>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    edge="start"
                                    // onClick={handleDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <MenuButton/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>

            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <Grid container>
                            <Grid item xs={2} sm={2} md={2}>
                            </Grid>
                            <Grid item xs={8} sm={8} md={8}>
                                <Grid container>
                                    <Grid item xs={3} sm={3}>
                                        <Link to="/" className="linkSizing">
                                            <img src={LogoWhite} className="App-logo-drawer-mob" alt="logo" />
                                        </Link>
                                    </Grid>
                                    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                                    <Grid item xs={8} sm={8} style={{marginTop: '15px'}}>
                                        <span className="Drawer-Title">
                                            disrupt'em
                                        </span>
                                    </Grid>
                                    </Slide>
                                </Grid>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} className="drawerIconBox">
                                <IconButton onClick={handleDrawerToggle}>
                                    <img src={menuIconWhite} className="Menu-logo-drawer-mob" alt="logo" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.content}>
                <div className={classes.toolbar} />
            </div>
        </div>
    );
}
ResponsiveDrawer.propTypes = {
    container: PropTypes.object,
};
export default ResponsiveDrawer;