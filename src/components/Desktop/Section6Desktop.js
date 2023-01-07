import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import '../../styles/Desktop/section6Desktop.css';
import HomeSixImage from '../../assets/home6Image.png'

const Section6Desktop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} style={{    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center"}}>
                    <Grid container className="part-box-desktop">
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" className="home-six-title-desktop">
                                You Are Part Of <br/>
                                The Team
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" className="home-six-description-desktop">
                                Working with us you get a full access to tasks board & team communication channels enabling you to keep real time tracking on project updates.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="image-six-box-desktop">
                    <img src={HomeSixImage} alt="" className="home-six-image-desktop"/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section6Desktop;
