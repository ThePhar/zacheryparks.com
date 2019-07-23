import React from 'react';
import Typed from 'react-typed';

import '../stylesheets/components/Banner.sass';

function Banner() {
    const strings = ['me develop your app.', 'me develop your website.', 'me develop your idea.', 'me develop your passion.', 'me develop your project.'];

    return (
        <div className='mh4-l mh5 mb5 tc'>
            <h1 className='f1-l f2-m f5'>
                <code className='' style={{ fontSize: '115%' }}>let</code>&nbsp;
                    <Typed
                        strings={strings}
                        typeSpeed={40}
                        backDelay={2000}
                        backSpeed={40}
                    />
            </h1>
            <p className='tj-l f6-m f6-l f7'>My name is Zach, and I'm a full stack MERN developer with experience developing beautiful and responsive React + Node applications.</p>
        </div>
    );
} export default Banner;