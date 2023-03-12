import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const GlobalStyles = createGlobalStyle`
  ${normalize};

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  .badges-item{
    width : 150px !important;
  }

  .title-badges{
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
      opacity: 0.5;
    }

    span:hover{
      opacity: 1;
    }
  }

  .container .title{
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 10px;
  }

  .content {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: auto;
    overflow: hidden;
  }

  .content .content-overlay {
    background: rgba(0,0,0,0.7);
    position: absolute;
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }

  .content:hover .content-overlay{
    opacity: 1;
  }

  .content-image{
    width: 100%;
  }

  .content-details {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .content:hover .content-details{
    top: 50%;
    left: 50%;
    opacity: 1;
  }

  .content-details h3{
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  .content-details p{
    color: #fff;
    font-size: 0.8em;
  }

  .fadeIn-bottom{
    top: 80%;
  }

  .fadeIn-top{
    top: 20%;
  }

  .fadeIn-left{
    left: 20%;
  }

  .fadeIn-right{
    left: 80%;
  }

  .exp-header{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .section-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .container-act{
    display: flex;
    justify-content: center;
    padding: 50px;
    width : 500px;
    @media (max-width: 450px) {
      width : 300px;
    }
  }

  .act-date{
    display: flex;
    position: absolute;
    z-index: 1;
    background: #E2211C;
    padding: 5px;
    border-radius: 2px;
    top: 80px;
    align-items: center;
    height : 25px;
  }
  
  .act-image{
    img {
      height : 300px !important;
      width : 100% !important;
      object-fit: cover;
      border-radius: 5px;
    
    }
  }

  .act-desc{
    width : 100%;
    margin: 0 auto;
    ${'' /* background: #FFFFFF; */}
  }

  .act-title{
    width : 100%;
    font-size: 14px;
    line-height: 20px;
    margin: 15px auto;

    h3{
      text-align: center;
      line-height: 20px;
    }
  }

  .act-org{
    width : 100%;
    font-size: 14px;
    text-align: center;
    margin: 15px auto;
  }

  .skill-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-bottom : 50px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    li {
      align-items: center !important;
    }
  }

  ${'' /* .icon{
    width: 30px;
    height: 30px;
    margin-right: 10px;
    color: #FFFFFF;
  } */}
  button{
    display: none;
    cursor: pointer;
    background: none;
    color: #FFFFFF;
    border: none;
    @media (max-width: 1024px) {
      display: block;
      order: 1;
    }
  }

  .open{
  
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @media (max-width: 1024px) {
      display: block;
      position: fixed;
      width: 100%;
      background: #0F1624;
      background-size: cover;
      height: 100vh;
      z-index: 1;
      animation: fadeIn 0.75s;
      margin: 0;
      li {
        margin-top : 0px;
        padding: 20px;

      }

      li:hover{
        cursor: pointer;
        background: #393939;
      }
    }
  }

  .slick-prev{
    left : 10px;
    z-index: 1;

    button{
      background-color: none;
    }
  }

  .slick-next {
    right : 20px;
  }
`;

export default GlobalStyles;