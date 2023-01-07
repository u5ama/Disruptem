import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import '../../styles/iPad/section6Ipad.css';
import HomeSixImage from '../../assets/home6Image.png'

const Section6Ipad = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container className="home-six-space-ipad">
                        <Grid item xs={12} sm={12} className="image-six-box-ipad">
                            <img src={HomeSixImage} alt="" className="home-six-image-ipad"/>
                        </Grid>
                    </Grid>
                    <Grid container className="part-box-ipad">
                        <Grid item xs={12} sm={10}>
                            <Typography variant="h4" className="home-six-title-ipad">
                                You Are Part Of <br/>
                                The Team
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" className="home-six-description-ipad">
                                Working with us you get a full access to tasks board & team communication channels enabling you to keep real time tracking on project updates.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section6Ipad;
