import React from 'react';
import { NavLink, Link } from "react-router-dom";

import './Header.sass';

function Header() {
    return (
        <nav className="db dt-l w-100 border-box pa3 ph5-l mv3-l">
            <Link className="link hot-pink hover-white f3 f5-l dib tl-l tc mb2 mb0-l w-100 pa2" to="/" title="Home">
                Zachery Parks
            </Link>
            <div className="navbar db dtc-l v-mid w-100 w-75-l tc tr-l">
                <NavLink className="link hot-pink hover-white f6 f5-l dib mr3 mr4-l" activeClassName="active" to="/" title="Home" exact>Home</NavLink>
                {/*<a className="link hot-pink hover-white f6 f5-l dib mr3 mr4-l" href="#" title="Blog">Blog</a>*/}
                <NavLink className="link hot-pink hover-white f6 f5-l dib mr3 mr4-l" activeClassName="active" to="/about" title="About">About</NavLink>
                <a className="link hot-pink hover-white f6 f5-l dib mr3 mr4-l" href="https://github.com/ThePhar/" title="Github">Github</a>
                <a className="link bg-hot-pink white hover-bg-white bg-animate hover-hot-pink br2 f6 f5-l dib pa2 ph3" href="mailto://zach@alliware.com" title="Contact">Contact</a>
            </div>
        </nav>
);
} export default Header;