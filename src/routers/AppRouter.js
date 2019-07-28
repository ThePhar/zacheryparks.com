import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import HomePage from '../components/HomePage/HomePage';
import AboutPage from "../components/AboutPage/AboutPage";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import 'tachyons';

function AppRouter() {
    return (
        <HashRouter basename='/'>
            <div className='bg-image' />
            <div className='flex flex-column justify-between items-center vh-100'>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/about" component={AboutPage} />
                </Switch>
                <Footer />
            </div>
        </HashRouter>
    );
} export default AppRouter;
