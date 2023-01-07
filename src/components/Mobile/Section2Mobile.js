import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/Mobile/section2.css';
import HomeTwoImage from '../../assets/home2Image.png'

const Section2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className="home-two">
                    <Grid container className="home-two-space">
                        <Grid item xs={12} sm={12}>
                            <img src={HomeTwoImage} alt="" className="home-two-image"/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} className="section-style">
                        <Grid container>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4" className="home-two-title">
                                    Agile design & development agency.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4" className="home-two-description">
                                    Our Team of designers, developers, project <br/> managers & entrepreneurs Are ready to develop your disruptive solution.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} className="home-two-button">
                                <Button variant="outlined" color="secondary">
                                    <span className="button-two-text-style"> Projects & Case Studies </span>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section2;


