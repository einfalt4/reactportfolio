import React, { useState } from "react";
import Home from './Home';
import Header from './Header';
import Aboutme from "../Pages/Aboutme";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";

export default function homeStart() {
    const [homePage, homePageSet] = useState('Home');

    const renderHome = () => {
        if (homePage === 'Home') {
            return <Home/>;
        }
        if (homePage === 'Aboutme') {
            return <Aboutme/>;
        }
        if(homePage === 'Contact') {
            return <Contact/>;
        }
        if(homePage === 'Projects') {
            return <Projects/>;
        }
        if(homePage === 'Resume') {
            return <Resume/>;
        };

        const pageChange = (page) => homePageSet(page);

        return (
            <div>
                <Header homePage={homePage} pageChange={homePage} />
                {renderHome()}
            </div>
        );
    }
}