import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
    Link
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import React from "react";
import "../../styles/Desktop/FooterDesktop.css";
import CompanyImage from "../../assets/footer-icon.png";

const FooterIpad = () => {
    return (
        <div style={{width: '100%'}}>
            <Grid item xs={12} sm={12} md={12} className="box-privacy-size" >
                <Grid container className="container-styling-lptp">
                    <Grid item xs={12} sm={12} md={12} className="box-privacy-size">
                        <Grid container>
                            <Grid item xs={6} sm={6} md={4} lg={4} className="footer-image-box">
                                <img src={CompanyImage} alt="" className="footer-image"/>
                            </Grid>
                            <Grid item xs={6} sm={6} md={4} lg={3}>
                                <Container>
                                    <Grid item xs={12} sm={12} md={12} style={{paddingTop:'30px'}}>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <Typography variant="h4" className="footer-mobile-link">
                                                    <Link to="/" style={{color: '#ffffff', textDecoration:'none'}}>
                                                        Home
                                                    </Link>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <Typography variant="h4" className="activeClass footer-mobile-link-lptp">
                                                    <Link to="/mvp" style={{color: '#ffffff', textDecoration:'none'}}>
                                                        MVP
                                                    </Link>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <Typography variant="h4" className="footer-mobile-link-lptp">
                                                    <Link to="/services" style={{color: '#ffffff', textDecoration:'none'}}>
                                                        Services
                                                    </Link>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <Typography variant="h4" className="footer-mobile-link-lptp">
                                                    <Link to="/" style={{color: '#ffffff', textDecoration:'none'}}>
                                                        Work
                                                    </Link>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <Typography variant="h4" className="footer-mobile-link-lptp">
                                                    <Link to="/" style={{color: '#ffffff', textDecoration:'none'}}>
                                                        Career
                                                    </Link>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={5}>
                                <Container>
                                    <Typography variant="h4" className="footer-mobile-address-lptp">
                                        1605 - 181 Wynford Dr, Toronto, ON,<br/>
                                        M3C 0C6 Canada
                                    </Typography>
                                </Container>
                                <Container>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12} style={{ marginTop: '45px'}}>
                                            <span className="footer-mobile-country-lptp">
                                                Canada
                                            </span>
                                            <span className="footer-mobile-number-lptp">
                                                &nbsp;+1 (647) 633 4368
                                            </span>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} style={{ marginTop: '10px'}}>
                                            <span className="footer-mobile-country-lptp">
                                                Kuwait
                                            </span>
                                            <span className="footer-mobile-number-lptp">
                                                &nbsp;+965 9767 889
                                            </span>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} className="upper-space" style={{paddingTop: '60px'}}>
                            <Container>
                                <Grid container>
                                    <Grid item xs={8} sm={8} md={8}>
                                        <Typography variant="h4" className="footer-mobile-rights-lptp">
                                            © All rights reserved <b className="comp">Disrupt’em</b> Agency.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <Typography variant="h4" className="footer-mobile-privacy-lptp">
                                            <Link to="/privacy_policy" style={{color: '#ffff'}}>
                                                Privacy
                                            </Link>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default FooterIpad;