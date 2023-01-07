import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import '../../styles/iPad/section5Ipad.css';
import FadiImage from "../../assets/Fadi.png";
import KhalidImage from "../../assets/khaled-photo.png";
import Linkdin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";

const Section5Ipad = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item xs={12} sm={12} className="video-box-ipad">
                    </Grid>
                    <Grid container className="home-five-space-ipad">
                        <Grid item xs={12} sm={12}>
                            <Grid container className="section-five-style-ipad">
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="h4" className="home-five-title-ipad">
                                      <b>  Leadership </b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8} style={{  marginBottom: '-20px'}}>
                                    <Grid container>
                                        <Grid item xs={6} sm={6}>
                                            <Grid item xs={12} sm={12}>
                                                <img src={FadiImage} alt="" className="img-size-ipad"/>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant="subtitle2" className="home5-name-ipad">
                                                    Fadi Ameer
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant="subtitle2" className="home5-designation-ipad">
                                                    Lead user experience <br/>
                                                    & Design
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <img src={Linkdin} alt="" className="img-size-social-ipad"/>
                                                <img src={Instagram} alt="" className="img-size-social-ipad"/>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Grid item xs={12} sm={12}>
                                                <img src={KhalidImage} alt="" className="img-size-ipad"/>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant="subtitle2" className="home5-name-ipad">
                                                    Khaled Nakawa
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant="subtitle2" className="home5-designation-ipad">
                                                    Lead Agile <br/>
                                                    transformation
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <img src={Linkdin} alt="" className="img-size-social-ipad"/>
                                                <img src={Instagram} alt="" className="img-size-social-ipad"/>
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

export default Section5Ipad;
