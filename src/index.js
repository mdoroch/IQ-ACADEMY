import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import classes from './index.css'
import App from './App';
import Logo from "./components/logo/logo";
import * as serviceWorker from './serviceWorker';
import ExampleCss from "./components/pushmenu/pushmenu";
import Push from "./components/pushmenu/pushmenu";


// $('.menu-btn').on('click', function() {
//
//     $('.menu').toggleClass('menu_active');
// })
//

// document.querySelector(".menu-btn").addEventListener("click", (e)=>{
//     document.querySelector(".menu").element.classList.toggle(".menu_active")
// })
ReactDOM.render(
  <React.StrictMode>

      {/*<meta name="viewport" content="width=device-width, initial-scale=1">*/}
    <App />
      {/*<Push/>*/}
      <Logo/>

          {/*<Log>o/*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
