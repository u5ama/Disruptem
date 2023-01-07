import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import '../../styles/Mobile/section5.css';
import FadiImage from "../../assets/Fadi.png";
import KhalidImage from "../../assets/khaled-photo.png";
import Linkdin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";

const Section5 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item xs={12} sm={6} className="video-box">
                    </Grid>
                    <Grid container className="home-five-space">
                        <Grid item xs={12} sm={6}>
                            <Grid container className="section-five-style">
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h4" className="home-five-title">
                                      <b>  Leadership </b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} style={{  marginBottom: '50px'}}>
                                    <Grid container>
                                        <Grid item xs={6} sm={6}>
                                            <Grid item xs={12} sm={12}>
                                                <img src={FadiImage} alt="" className="img-size"/>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant="subtitle2" className="home5-name">
                                                    Fadi Ameer
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant="subtitle2" className="home5-designation">
                                                    Lead user experience <br/>
                                                    & Design
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <img src={Linkdin} alt="" className="img-size-social"/>
                                                <img src={Instagram} alt="" className="img-size-social"/>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Grid item xs={12} sm={12}>
                                                <img src={KhalidImage} alt="" className="img-size"/>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant="subtitle2" className="home5-name">
                                                    Khaled Nakawa
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant="subtitle2" className="home5-designation">
                                                    Lead Agile <br/>
                                                    transformation
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <img src={Linkdin} alt="" className="img-size-social"/>
                                                <img src={Instagram} alt="" className="img-size-social"/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section5;
