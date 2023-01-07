import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import '../../styles/Mobile/section6.css';
import HomeSixImage from '../../assets/home6Image.png'

const Section6 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container className="home-six-space">
                        <Grid item xs={12} sm={6} className="image-six-box">
                            <img src={HomeSixImage} alt="" className="home-six-image"/>
                        </Grid>
                    </Grid>
                    <Grid container className="part-box">
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" className="home-six-title">
                                You Are Part Of <br/>
                                The Team
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" className="home-six-description">
                                Working with us you get a full access to tasks board & team communication channels enabling you to keep real time tracking on project updates.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section6;
