import styled from 'styled-components';

const  Progress  =  styled.div`
  transform: rotate(90deg);
  transform-origin: right top;
   position:fixed;
   right:0px;
   bottom:-10px;
  background:  linear-gradient(
    to right,
    #c40046 ${props => props.scroll},
    #3c4a59  0);
  width:  100vh;
  height:  10px;
  z-index:  9999;
  //top: 0px
`;

export  default  Progress;