import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
    Link
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import React from "react";
import "../../styles/Mobile/Footer.css";

const FooterMobile = () => {
    return (
        <div>
            <Grid item xs={12} sm={12} md={12} className="box-privacy-size" >
                <Grid container className="container-styling">
                    <Grid item xs={12} sm={12} md={8} className="box-privacy-size">
                        <Grid container>
                            <Container>
                                <Grid item xs={12} sm={12} md={12} style={{paddingTop:'30px'}}>
                                    <Grid container>
                                        <Grid item xs={12} sm={3} md={3}>
                                            <Typography variant="h4" className="footer-mobile-link">
                                                <Link to="/" style={{color: '#ffffff', textDecoration:'none'}}>
                                                    Home
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={2} md={3}>
                                            <Typography variant="h4" className="activeClass footer-mobile-link">
                                                <Link to="/mvp" style={{color: '#ffffff', textDecoration:'none'}}>
                                                    MVP
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={3} md={3}>
                                            <Typography variant="h4" className="footer-mobile-link">
                                                <Link to="/services" style={{color: '#ffffff', textDecoration:'none'}}>
                                                    Services
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={3}>
                                            <Typography variant="h4" className="footer-mobile-link">
                                                <Link to="/" style={{color: '#ffffff', textDecoration:'none'}}>
                                                    Work
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={3}>
                                            <Typography variant="h4" className="footer-mobile-link">
                                                <Link to="/" style={{color: '#ffffff', textDecoration:'none'}}>
                                                    Career
                                                </Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Container>

                            <Grid item xs={12} sm={12} md={9} style={{paddingTop:'30px'}}>
                                <Container>
                                    <Typography variant="h4" className="footer-mobile-address">
                                        1605 - 181 Wynford Dr, Toronto, ON,<br/>
                                        M3C 0C6 Canada
                                    </Typography>
                                </Container>
                                <Container>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={4} style={{ marginTop: '25px'}}>
                                            <span className="footer-mobile-country">
                                                Canada
                                            </span>
                                            <span className="footer-mobile-number">
                                                &nbsp;+1 (647) 633 4368
                                            </span>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} style={{ marginTop: '10px'}}>
                                            <span className="footer-mobile-country">
                                                Kuwait
                                            </span>
                                            <span className="footer-mobile-number">
                                                &nbsp;+965 9767 889
                                            </span>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} style={{marginBottom: '10%'}}>
                            <Container>
                                <Grid container>
                                    <Grid item xs={8} sm={8} md={6}>
                                        <Typography variant="h4" className="footer-mobile-rights">
                                            © All rights reserved <b className="comp">Disrupt’em</b> Agency.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={6}>
                                        <Typography variant="h4" className="footer-mobile-privacy">
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
export default FooterMobile;