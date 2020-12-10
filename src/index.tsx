import { render } from 'react-dom';
import * as React from 'react';
import { Suspense, lazy } from 'react';
import './index.css';
const Home = lazy(() => import(/* webpackChunkName: "home" */ './components/home/home.tsx'));
const History = lazy(() => import(/* webpackChunkName: "history" */ './components/history/history.tsx'));
import { BrowserRouter, Route, Link } from 'react-router-dom';
const logo = "./images/googlelogo.png";

render(
    <BrowserRouter>
                <div>
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="links">
                        <Link to="/home">Main</Link> | <Link to="/history">Game history</Link>
                    </div>
                </div>
                {/* <Route path="/" exact component={Main} /> */}
                <Route path="/home" exact component={() =>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </Suspense> 
                } />
                <Route path="/history" exact component={() =>
                    <Suspense fallback={<div>Loading...</div>}>
                        <History />
                    </Suspense> 
                } />
            </BrowserRouter>,
    document.getElementById('root')
);