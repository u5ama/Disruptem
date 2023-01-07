import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/iPad/section3Ipad.css';
import HomeThreeImage from '../../assets/home3Image.png'

const Section3Ipad = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item xs={12} sm={12} className="image-box-ipad">
                        <img src={HomeThreeImage} alt="" className="home-three-image-ipad"/>
                    </Grid>
                    <Grid container className="home-three-space-ipad">
                        <Grid container>
                            <Grid item xs={12} sm={11}>
                                <Typography variant="h4" className="home-three-title-ipad">
                                    Launch Your MVP <br/>
                                    In <span style={{color: '#c40046'}}>4 Months</span> For A Fixed Price.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4" className="home-three-description-ipad">
                                    The aim is to produce a product that gets customers feedback and build on it, leading to a product that the market wants.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} className="home-three-button-ipad">
                                <Button variant="outlined" color="secondary">
                                    <span className="button-three-text-style-ipad"> MVP Detail & Pricing </span>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section3Ipad;
