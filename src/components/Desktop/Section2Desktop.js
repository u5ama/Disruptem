import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/Desktop/section2Desktop.css';
import HomeTwoImage from '../../assets/home2Image.png'

const Section2Desktop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className="section-style-desktop">
                    <Grid container>
                        <Grid item xs={12} sm={8} md={10}>
                            <Typography variant="h4" className="home-two-title-desktop">
                                Agile design & development agency.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={10}>
                            <Typography variant="h4" className="home-two-description-desktop">
                                Our Team of designers, developers, project <br/> managers & entrepreneurs Are ready to develop your disruptive solution.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} className="home-two-button-desktop">
                            <Button variant="outlined" color="secondary">
                                <span className="button-two-text-style-desktop"> Projects & Case Studies </span>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container className="home-two-space-desktop">
                        <Grid item xs={12} sm={12}>
                            <img src={HomeTwoImage} alt="" className="home-two-image-desktop"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section2Desktop;
