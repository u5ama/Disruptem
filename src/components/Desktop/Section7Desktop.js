import Grid from "@material-ui/core/Grid";
import React from "react";
import '../../styles/Desktop/section7Desktop.css';
import Carousel from 're-carousel';
import Typography from "@material-ui/core/Typography";
import IndicatorDots from '../../containers/Mobile/dotIndicator'

const Section7Desktop = () => {
    return (
        <div className="App">
            <Grid container className="home7-space-desktop">
                <Grid item xs={12} sm={8} md={6} className="box-reviews-size-desktop">
                    <div style={{width: '100%', height: 400, marginTop: '10px'}}>
                        <Carousel axis={'x'} widgets={[IndicatorDots]}>
                            <div>
                                <Grid item xs={12} sm={12}>
                                    <span className="dot-desktop"></span>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="subtitle2" className="home7-name-desktop">
                                        Maabad Said
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="subtitle2" className="home7-appName-desktop">
                                        Rydezilla
                                    </Typography>
                                </Grid>
                                <Typography variant="h4" className="home7-description-desktop">
                                    “Today We Made A Review For The IOS, Android APK and The Backend. I Just Wanted To Express How Impressed We Were With The Progress That Has Been Made So Far, All 3 Are Turning Out Quite Beautifully And This Is The First Time That The Development Quality Has Met The Level Of Enthusiasm And Passion We Have For This Project. Kudos, Everyone And Keep Up The Amazing Work”
                                </Typography>
                            </div>
                        </Carousel>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section7Desktop;
