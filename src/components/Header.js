import React from "react";
import './src/App.css';

function Header({ homePage, homePageSet }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#Aboutme"
                onClick={() => pageChange ('Aboutme')}
                className={homePage === 'Aboutme' ? 'nav-link active' : 'nav-link'}>
                    About Randy
                </a>
            </li>
            <li className="nav-item">
                <a href="#Project"
                onClick={() => pageChange ('Projects')}
                className={homePage === 'Aboutme' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a href="#Contact"
                onClick={() => pageChange ('Contact')}
                className={homePage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
            <li className="nav-item">
            <a href="#Resume"
            onClick={() => pageChange ('Resume')}
            className={homePage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                Resume
            </a>
        </li>
        </ul>
    );
}

export default Header;