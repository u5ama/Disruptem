import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/Desktop/section4Desktop.css';

const Section4Desktop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container className="home-four-space-desktop">
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" className="home-four-title-desktop">
                                A World Without <br/>
                                Boarders
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                            <Typography variant="h4" className="home-four-description-desktop">
                                We are talents from around the world, doing what we like & living where our hearts are.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} className="home-four-button-desktop">
                                <Button variant="outlined" color="secondary">
                                    <span className="button-four-text-style-desktop"> Career </span>
                                </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section4Desktop;
