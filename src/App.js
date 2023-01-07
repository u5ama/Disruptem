
import './styles/App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import React, {Component} from "react";
import TagManager from 'react-gtm-module'
import Layout from "./containers/Layouts";

const tagManagerArgs = {
  gtmId: 'GTM-T6W83LC'
}
TagManager.initialize(tagManagerArgs);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      language: {},
      _isMounted: false
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    this.setState({_isMounted : false});
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const {width} = this.state;
    const isMobile = width <= 882;
    if (isMobile) {
      return (
          <React.Fragment>
            <BrowserRouter>
              <div className="App">
                <Switch>
                  <Route exact path='/' render={() => <Layout/>}/>
                </Switch>
              </div>
            </BrowserRouter>
          </React.Fragment>
      )
    } else {
      return (
          <React.Fragment>
            <BrowserRouter>
              <div className="App">
                <Switch>
                  <Route exact path='/' render={() => <Layout/>}/>
                </Switch>
              </div>
            </BrowserRouter>
          </React.Fragment>
      )
    }
  }
}

