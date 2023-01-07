import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/Desktop/section8Desktop.css';
import imageOne from "../../assets/social-image-one.png";
import imageTwo from "../../assets/social-image-two-ipad.png";

const Section8Desktop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container className="home-eight-space-desktop">
                        <Grid container>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4" className="home-eight-title-desktop">
                                   <b> Follow us on <br/>Instagram </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4" className="home-eight-description-desktop">
                                    We share mockups & tips to help you <br/>in your tech startup journey.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} className="home-eight-button-desktop">
                                <Button variant="outlined" color="secondary">
                                    <span className="button-eight-text-style-desktop"> Instagram </span>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container>
                        <Grid item xs={12} sm={5} md={6}>
                            <img src={imageOne} alt="" className="image-social-size-desktop"/>
                        </Grid>
                        <Grid item xs={12} sm={5} md={6}>
                            <img src={imageTwo} alt="" className="image-social-size-desktop-two"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section8Desktop;
