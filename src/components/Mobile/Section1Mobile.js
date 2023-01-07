import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/Mobile/section1.css';
import DemoVideo from '../../assets/demo.mp4';

const Section1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} className="home-space2"></Grid>
                        <Grid item xs={12} sm={12} md={6} className="home-space">
                            <video playsInline autoPlay muted loop id="myVideo">
                                <source src={DemoVideo} type="video/mp4" />
                            </video>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4" className="home-description">
                                    Helping <span className="bold-size">startups</span> succeed by <br/>building unique & scalable solutions.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} className="home-button">
                                    <Button variant="outlined" color="secondary">
                                        <span className="button-text-style"> Services & Pricing </span>
                                    </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section1;
