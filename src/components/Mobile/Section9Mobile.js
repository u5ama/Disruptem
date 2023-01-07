import Grid from "@material-ui/core/Grid";
import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import '../../styles/Mobile/section9.css';
import Typography from "@material-ui/core/Typography";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import phoneIcon from "../../assets/ic-local-phone.png";
import axios from "axios";
import {Redirect} from "react-router-dom";

class Section9 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile_no: '',
            message: '',
            nameValidationMessage: '',
            mobileValidationMessage: '',
            emailValidationMessage: '',
            nameError: false,
            mobileError: false,
            emailError: false,
            isValidForm: true,
            bgColor: '#3c4a59',
            btBorder: '',
            isSuccess: false
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
        if (this.state.name !== ''){
            this.setState({nameError: false})
            this.setState({nameValidationMessage: ''})
        }
        if (this.state.name !== '' && this.state.email !== '' && this.state.mobile_no !== ''){
            this.setState({bgColor: '#c40046'})
            this.setState({btBorder: '1px solid #c40046'})
        }
    }

    onNumberChange(event) {
        this.setState({mobile_no: event.target.value})
        if (this.state.mobile_no !== ''){
            this.setState({mobileError: false})
            this.setState({mobileValidationMessage: ''})
        }
        if (this.state.name !== '' && this.state.email !== '' && this.state.mobile_no !== ''){
            this.setState({bgColor: '#c40046'})
            this.setState({btBorder: '1px solid #c40046'})
        }
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
        if (this.state.name !== ''){
            this.setState({emailError: false})
            this.setState({emailValidationMessage: ''})
        }
        if (this.state.name !== '' && this.state.email !== '' && this.state.mobile_no !== ''){
            this.setState({bgColor: '#c40046'})
            this.setState({btBorder: '1px solid #c40046'})
        }
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    validation(){
        if (this.state.name === ''){
            this.setState({nameError: true})
            this.setState({isValidForm: false})
            this.setState({nameValidationMessage: 'Name is required'})
        }else{
            this.setState({isValidForm: true})
        }

        if (this.state.email === ''){
            this.setState({emailError: true})
            this.setState({isValidForm: false})
            this.setState({emailValidationMessage: 'Email is required'})
        }else{
            this.setState({isValidForm: true})
        }

        if (this.state.mobile_no === ''){
            this.setState({mobileError: true})
            this.setState({isValidForm: false})
            this.setState({mobileValidationMessage: 'Mobile Number is required'})
        }else{
            this.setState({isValidForm: true})
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validation()){

        }else{
            axios({
                method: "POST",
                //  url:"http://api-staging.disruptem.com/api/v1/contact-us",
                url:"https://api-prod.disruptem.com/api/v1/contact-us",
                data:  {
                    name: this.state.name,
                    email: this.state.email,
                    mobile_no: this.state.mobile_no,
                    message: this.state.message
                }
            }).then((response)=>{
                if (response.status === 200) {
                    this.setState({ isSuccess: true });
                } else if(response.data.status === 'fail') {
                    alert("Message failed to send.")
                }
            })
        }

    }

    resetForm(){
        this.setState({name: '', email: '', message: '', mobile_no: ''})
    }
    render() {
        if (this.state.isSuccess) {
            return <Redirect to = {{ pathname: "/success",state: { name: this.state.name, email: this.state.email, mobile_no: this.state.mobile_no, message:this.state.message } }} />;
        }
        return (
            <div className="App">
                <Container>
                    <Grid item xs={12} sm={12} md={8} className="centerFooter">
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container className="get-in-touch-form">
                                <Grid item xs={12} sm={12} md={12} className="get-in-touch-form">
                                    <Container>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={5}>
                                                <Typography variant="h4" className="mvp-talk-mob">
                                                    Let’s Talk.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={4}>
                                                <Typography variant="h4" className="mvp-email-mob">
                                                    Hey@disruptem.com
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <Container>
                                            <form noValidate autoComplete="off" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                                <div>
                                                    <TextField
                                                        id="standard-secondary"
                                                        label="Whats your name ?"
                                                        defaultValue=""
                                                        helperText={this.state.nameValidationMessage}
                                                        error={this.state.nameError}
                                                        required
                                                        color="secondary"
                                                        fullWidth
                                                        style={{width: '100%', marginTop: '20px'}}
                                                        value={this.state.name}
                                                        onChange={this.onNameChange.bind(this)}
                                                    />
                                                </div>
                                                <div>
                                                    <TextField
                                                        id="standard-secondary"
                                                        label="Mobile number"
                                                        defaultValue=""
                                                        error={this.state.mobileError}
                                                        helperText={this.state.mobileValidationMessage}
                                                        required
                                                        color="secondary"
                                                        fullWidth
                                                        style={{width: '100%', marginTop: '20px'}}
                                                        value={this.state.mobile_no}
                                                        onChange={this.onNumberChange.bind(this)}
                                                    />
                                                </div>
                                                <div>
                                                    <TextField
                                                        id="standard-secondary"
                                                        label="Email Address"
                                                        defaultValue=""
                                                        helperText={this.state.emailValidationMessage}
                                                        error={this.state.emailError}
                                                        required
                                                        color="secondary"
                                                        fullWidth
                                                        type="email"
                                                        style={{width: '100%', marginTop: '20px'}}
                                                        value={this.state.email}
                                                        onChange={this.onEmailChange.bind(this)}
                                                    />
                                                </div>
                                                <div>
                                                    <TextField
                                                        id="standard-secondary"
                                                        label="More details ( Optional )"
                                                        defaultValue=""
                                                        // helperText="Name is required"
                                                        color="secondary"
                                                        fullWidth
                                                        type="text"
                                                        multiline
                                                        rows={4}
                                                        variant="outlined"
                                                        style={{width: '100%', marginTop: '20px'}}
                                                        value={this.state.message}
                                                        onChange={this.onMessageChange.bind(this)}
                                                    />
                                                </div>
                                                <div>
                                                    <Button variant="outlined" color="primary"
                                                            className="callMeBackButton" type="submit" style={{backgroundColor: this.state.bgColor ,border: this.state.btBorder}}>
                                                        <img src={phoneIcon} alt="" className="phoneIconImage"/> &nbsp; CALL ME
                                                        BACK
                                                    </Button>
                                                </div>
                                            </form>
                                        </Container>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Section9;