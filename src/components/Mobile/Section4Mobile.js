import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/Mobile/section4.css';

const Section4 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container className="home-four-space">
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" className="home-four-title">
                                A World Without <br/>
                                Boarders
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" className="home-four-description">
                                We are talents from around the world, doing what we like & living where our hearts are.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} className="home-four-button">
                                <Button variant="outlined" color="secondary">
                                    <span className="button-four-text-style"> Career </span>
                                </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section4;
