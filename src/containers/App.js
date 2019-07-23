import React, { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

import 'tachyons';

function App() {
    return (
        <Fragment>
            <div className='bg-image' />
            <div className='flex flex-column justify-between items-center vh-100'>
                <Header />
                <Banner />
                <Footer />
            </div>
        </Fragment>
    );
} export default App;
