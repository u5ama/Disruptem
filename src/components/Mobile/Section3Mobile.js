import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/Mobile/section3.css';
import HomeThreeImage from '../../assets/home3Image.png'

const Section3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item xs={12} sm={6} className="image-box">
                        <img src={HomeThreeImage} alt="" className="home-three-image"/>
                    </Grid>
                    <Grid container className="home-three-space">
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h4" className="home-three-title">
                                    Launch Your MVP <br/>
                                    In <span style={{color: '#c40046'}}>4 Months</span> For A Fixed Price.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h4" className="home-three-description">
                                    The aim is to produce a product that gets customers feedback and build on it, leading to a product that the market wants.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} className="home-three-button">
                                <Button variant="outlined" color="secondary">
                                    <span className="button-three-text-style"> MVP Detail & Pricing </span>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section3;
