import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/Mobile/section8.css';
import imageOne from "../../assets/social-image-one.png"
import imageTwo from "../../assets/social-image-two.png"

const Section8 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container className="home-eight-space">
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" className="home-eight-title">
                               <b> Follow us on Instagram </b>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" className="home-eight-description">
                                We share mockups & tips to help you in your tech startup journey.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} className="home-eight-button">
                            <Button variant="outlined" color="secondary" style={{ borderColor: '#121323'}}>
                                <span className="button-eight-text-style"> Instagram </span>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <img src={imageOne} alt="" className="image-social-size"/>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <img src={imageTwo} alt="" className="image-social-size"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section8;
