import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/iPad/section1Ipad.css';
import DemoVideo from '../../assets/demo.mp4';

const Section1Ipad = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container className="home-space-ipad">
                        <video playsInline autoPlay muted loop id="myVideoIpad">
                            <source src={DemoVideo} type="video/mp4" />
                        </video>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="h4" className="home-description-ipad">
                                Helping <span className="bold-size">startups</span> succeed by <br/>building unique & scalable solutions.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} className="home-button-ipad">
                                <Button variant="outlined" color="secondary">
                                    <span className="button-text-style-ipad"> Services & Pricing </span>
                                </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section1Ipad;
