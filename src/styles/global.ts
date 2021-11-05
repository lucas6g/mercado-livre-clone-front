import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
}
body{
  background-color:#ebebeb;
  
}
body,input,button{
  font-family: 'Roboto', serif;
  font-size:16px;
}

button {
  cursor: pointer;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}


@media (max-width: 1200px) {
  html {
    font-size: 93.75%;
  }
}


@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
  
}
`;