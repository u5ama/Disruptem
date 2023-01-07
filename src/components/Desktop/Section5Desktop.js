import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import '../../styles/Desktop/section5Desktop.css';
import FadiImage from "../../assets/Fadi.png";
import KhalidImage from "../../assets/khaled-photo.png";
import Linkdin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";

const Section5Desktop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container className="home-five-space-desktop">
                        <Grid item xs={12} sm={12} md={10}>
                            <Typography variant="h4" className="home-five-title-desktop">
                              <b>  Leadership </b>
                            </Typography>
                            <Grid container>
                                <Grid item xs={6} sm={6}>
                                    <Grid item xs={12} sm={12}>
                                        <img src={FadiImage} alt="" className="img-size-desktop"/>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="subtitle2" className="home5-name-desktop">
                                            Fadi Ameer
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="subtitle2" className="home5-designation-desktop">
                                            Lead user experience <br/>
                                            & Design
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <img src={Linkdin} alt="" className="img-size-social-desktop"/>
                                        <img src={Instagram} alt="" className="img-size-social-desktop"/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Grid item xs={12} sm={12}>
                                        <img src={KhalidImage} alt="" className="img-size-desktop"/>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="subtitle2" className="home5-name-desktop">
                                            Khaled Nakawa
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="subtitle2" className="home5-designation-desktop">
                                            Lead Agile <br/>
                                            transformation
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <img src={Linkdin} alt="" className="img-size-social-desktop"/>
                                        <img src={Instagram} alt="" className="img-size-social-desktop"/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="video-box-desktop">
                </Grid>
            </Grid>
        </div>
    );
};

export default Section5Desktop;
