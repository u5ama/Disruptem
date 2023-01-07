import React, {Component} from 'react';
import Progress from "./Mobile/RightProgressBar";
import Drawer from "./Mobile/Drawer";
import DrawerIpad from "./Ipad/DrawerIpad";
import DrawerLaptop from "./Desktop/DrawerDesktop";
import DrawerDesktop from "./Desktop/DrawerBigDesktop";
import ReactFullPage from '@fullpage/react-fullpage';
import Section1 from "../components/Mobile/Section1Mobile";
import Section2 from "../components/Mobile/Section2Mobile";
import Section3 from "../components/Mobile/Section3Mobile";
import Section4 from "../components/Mobile/Section4Mobile";
import Section5 from "../components/Mobile/Section5Mobile";
import Section6 from "../components/Mobile/Section6Mobile";
import Section7 from "../components/Mobile/Section7Mobile";
import Section8 from "../components/Mobile/Section8Mobile";
import Section9 from "../components/Mobile/Section9Mobile";

import Section1Ipad from "../components/iPad/Section1Ipad";
import Section2Ipad from "../components/iPad/Section2Ipad";
import Section3Ipad from "../components/iPad/Section3Ipad";
import Section4Ipad from "../components/iPad/Section4Ipad";
import Section5Ipad from "../components/iPad/Section5Ipad";
import Section6Ipad from "../components/iPad/Section6Ipad";
import Section7Ipad from "../components/iPad/Section7Ipad";
import Section8Ipad from "../components/iPad/Section8Ipad";
import Section9Ipad from "../components/iPad/Section9Ipad";

import Section1Desktop from "../components/Desktop/Section1Desktop";
import Section2Desktop from "../components/Desktop/Section2Desktop";
import Section3Desktop from "../components/Desktop/Section3Desktop";
import Section4Desktop from "../components/Desktop/Section4Desktop";
import Section5Desktop from "../components/Desktop/Section5Desktop";
import Section6Desktop from "../components/Desktop/Section6Desktop";
import Section7Desktop from "../components/Desktop/Section7Desktop";
import Section8Desktop from "../components/Desktop/Section8Desktop";
import Section9Desktop from "../components/Desktop/Section9Desktop";

import FooterMobile from "../containers/Mobile/FooterMobile";
import FooterIpad from "./Ipad/FooterIpad";
import FooterDesktop from "./Desktop/FooterDesktop";


const FullPageMobile = () => (
    <ReactFullPage
        bigSectionsDestination = 'top'
        onLeave={(origin, destination, direction) => {
            // console.log("onLeave event", { origin, destination, direction });
        }}
        licenseKey = {'B6E45D9B-AF424D66-A33F6DD1-7F018545'}
        scrollingSpeed = {200} /* Options here */
        scrollBar = {true}
        easing = 'easeInOutCubic'
        easingcss3 = 'ease'
        render={({ state, fullPageApi }) => {
            return (
                <ReactFullPage.Wrapper>
                    <div className="section">
                        <div className="section-one-mob">
                            <Section1 />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-two-mob" id="white-back">
                            <Section2 />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-three-mob">
                            <Section3 />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-four-mob">
                            <Section4 />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-five-mob">
                            <Section5 />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-six-mob">
                            <Section6 />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-seven-mob">
                            <Section7 />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-eight-mob">
                            <Section8 />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-nine-mob">
                            <Section9 />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-ten-mob">
                            <FooterMobile />
                        </div>
                    </div>
                </ReactFullPage.Wrapper>
            );
        }}
    />
);
const FullPageIpad = () => (
    <ReactFullPage
        bigSectionsDestination = 'top'
        onLeave={(origin, destination, direction) => {
            // console.log("onLeave event", { origin, destination, direction });
        }}
        licenseKey = {'B6E45D9B-AF424D66-A33F6DD1-7F018545'}
        scrollingSpeed = {200} /* Options here */
        scrollBar = {true}
        easing = 'easeInOutCubic'
        easingcss3 = 'ease'
        render={({ state, fullPageApi }) => {
            return (
                <ReactFullPage.Wrapper>
                    <div className="section">
                        <div className="section-one-mob">
                            <Section1Ipad />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-two-mob" id="white-back">
                            <Section2Ipad />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-three-mob">
                            <Section3Ipad />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-four-mob">
                            <Section4Ipad />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-five-mob">
                            <Section5Ipad />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-six-mob">
                            <Section6Ipad />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-seven-mob">
                            <Section7Ipad />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-eight-mob">
                            <Section8Ipad />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-nine-mob">
                            <Section9Ipad />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-ten-mob">
                            <FooterIpad />
                        </div>
                    </div>
                </ReactFullPage.Wrapper>
            );
        }}
    />
);

const FullPageLaptop = () => (
    <ReactFullPage
        bigSectionsDestination = 'top'
        onLeave={(origin, destination, direction) => {
            // console.log("onLeave event", { origin, destination, direction });
        }}
        licenseKey = {'B6E45D9B-AF424D66-A33F6DD1-7F018545'}
        scrollingSpeed = {200} /* Options here */
        scrollBar = {true}
        easing = 'easeInOutCubic'
        easingcss3 = 'ease'
        render={({ state, fullPageApi }) => {
            return (
                <ReactFullPage.Wrapper>
                    <div className="section">
                        <div className="section-one-mob">
                            <Section1Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-two-mob" id="white-back">
                            <Section2Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-three-mob">
                            <Section3Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-four-mob">
                            <Section4Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-five-mob">
                            <Section5Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-six-mob">
                            <Section6Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-seven-mob">
                            <Section7Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-eight-desktop">
                            <Section8Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-nine-mob">
                            <Section9Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-ten-mob">
                            <FooterDesktop />
                        </div>
                    </div>
                </ReactFullPage.Wrapper>
            );
        }}
    />
);

const FullPageDesktop = () => (
    <ReactFullPage
        bigSectionsDestination = 'top'
        onLeave={(origin, destination, direction) => {
            // console.log("onLeave event", { origin, destination, direction });
        }}
        licenseKey = {'B6E45D9B-AF424D66-A33F6DD1-7F018545'}
        scrollingSpeed = {200} /* Options here */
        scrollBar = {true}
        easing = 'easeInOutCubic'
        easingcss3 = 'ease'
        render={({ state, fullPageApi }) => {
            return (
                <ReactFullPage.Wrapper>
                    <div className="section">
                        <div className="section-one-mob">
                            <Section1Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-two-mob" id="white-back">
                            <Section2Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-three-mob">
                            <Section3Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-four-mob">
                            <Section4Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-five-mob">
                            <Section5Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-six-mob">
                            <Section6Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-seven-mob">
                            <Section7Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-eight-desktop">
                            <Section8Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-nine-mob">
                            <Section9Desktop />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-ten-mob">
                            <FooterDesktop />
                        </div>
                    </div>
                </ReactFullPage.Wrapper>
            );
        }}
    />
);

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
            width: window.innerWidth,
            backColor: 'transparent',
            bgColor: ''
        };
    }
    state = {
        scrollPosition: 0
    };

    listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                this.calculateScrollDistance();
                this.setState({backColor: '#1C2A39'})
            },{passive: true});
            const scrolled = document.getElementById("white-back");
            console.log("Hello");
            console.log(scrolled.style.backgroundColor);
        });
        /*if (scrolled >= 120) {
            if (this.state.status !== "amir") {
                this.setState({ status: "amir" });
            }
        } else {
            if (this.state.status !== "top") {
                this.setState({ status: "top" });
            }
        }*/
    };

    calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by
        const winHeight = window.innerHeight;
        const docHeight = this.getDocHeight();

        const totalDocScrollLength = docHeight - winHeight;
        const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);

        // const bg =  window.getComputedStyle(document.body, null).getPropertyValue('background-color');

        this.setState({
            scrollPosition,
        });
    };

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    };

    componentDidMount() {
        this.listenToScrollEvent();
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 760;
        const isIpad = width <= 1024 && width >= 768;
        const laptop = width <= 1919 && width >= 1024;

        if (isMobile) {
        return (
            <React.Fragment>
                <div className="App">
                    <title>Disrupt'em</title>
                    <Progress scroll={this.state.scrollPosition + '%'} />
                    <header className="App-header">
                        <Drawer />
                        <FullPageMobile />
                    </header>
                </div>
            </React.Fragment>
        );
        }
        else if (isIpad) {
        return (
            <React.Fragment>
                <div className="App">
                    <title>Disrupt'em</title>
                    <Progress scroll={this.state.scrollPosition + '%'} />
                    <header className="App-header">
                        <DrawerIpad/>
                        <FullPageIpad />
                    </header>
                </div>
            </React.Fragment>
        );
        }
        else if(laptop) {
            return (
                <React.Fragment>
                    <title>Disrupt'em</title>
                    <Progress scroll={this.state.scrollPosition + '%'} />
                    <header className="App-header">
                        <DrawerLaptop/>
                        <FullPageLaptop />
                    </header>
                </React.Fragment>
            );
            }
        else {
            return (
                <React.Fragment>
                    <title>Disrupt'em</title>
                    <Progress scroll={this.state.scrollPosition + '%'} />
                    <header className="App-header">
                        <DrawerDesktop/>
                        <FullPageDesktop />
                    </header>
                </React.Fragment>
            );
            }
        }
}
