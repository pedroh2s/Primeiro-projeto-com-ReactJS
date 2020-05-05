import { createGlobalStyle } from 'styled-components';

import imageBackground from '../assets/github-bg.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #F6F6F6 url(${imageBackground}) no-repeat 75% 0.1%;
    -webkit-font-smoothing: antialiased;
  }

  body,input,button{
    font: 16px Roboto, sans-serif;
  }

  #root{
    max-width: 960px;
    margin:0 auto;
    padding: 50px 20px;
  }

  button{
    cursor: pointer;
  }
`;
