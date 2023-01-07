import React, { Component } from "react";
import styled from "styled-components";
import menuIcon from "../../assets/menu-white-icon.png";
import '../../styles/Mobile/menuButton.css';

const IconButtonWrapper = styled.div`
  float: right !important;
  overflow: hidden !important;
  transition: all 0.3s ease-in-out !important;
  transform-origin : center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 30px;
  transform: ${props => (props.rotate ? `rotate(360deg)` : "")};
`;

class IconButtonContainer extends Component {
    state = {
        rotate: false
    };

    handleClick = () =>
        this.setState(
            prevState => ({ rotate: !prevState.rotate }),
            () => console.log(this.state.rotate)
        );

    render() {
        return (
            <IconButtonWrapper rotate={this.state.rotate} onClick={this.handleClick}>
                <img src={menuIcon} className="Menu-logo" alt="logo" />
            </IconButtonWrapper>
        );
    }
}

function MenuButton() {
    return (
        <div className="App">
            <IconButtonContainer />
        </div>
    );
}

export  default MenuButton;