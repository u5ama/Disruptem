import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import '../../styles/iPad/section2Ipad.css';
import HomeTwoImage from '../../assets/home2Image.png'

const Section2Ipad = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container className="home-two-space-ipad">
                        <Grid item xs={12} sm={12}>
                            <img src={HomeTwoImage} alt="" className="home-two-image-ipad"/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} className="section-style-ipad">
                        <Grid container>
                            <Grid item xs={12} sm={8} md={6}>
                                <Typography variant="h4" className="home-two-title-ipad">
                                    Agile design & development agency.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4" className="home-two-description-ipad">
                                    Our Team of designers, developers, project <br/> managers & entrepreneurs Are ready to develop your disruptive solution.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} className="home-two-button-ipad">
                                <Button variant="outlined" color="secondary">
                                    <span className="button-two-text-style-ipad"> Projects & Case Studies </span>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section2Ipad;
