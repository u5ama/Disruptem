import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/Desktop/section1Desktop.css';
import DemoVideo from '../../assets/demo.mp4';

const Section1Desktop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container className="home-space-desktop">
                        <video playsInline autoPlay muted loop id="myVideoIpad">
                            <source src={DemoVideo} type="video/mp4" />
                        </video>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="h4" className="home-description-desktop">
                                Helping <span className="bold-size">startups</span> succeed by <br/>building unique & scalable solutions.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} className="home-button-desktop">
                                <Button variant="outlined" color="secondary">
                                    <span className="button-text-style-desktop"> Services & Pricing </span>
                                </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section1Desktop;
