import React from "react";

export default function Aboutme (){
    return (
        <main className="container">
        <div className="aboutMe">
        <h2 className="subtitle">About Me</h2>
        <section className='info'>
        <p>
            Hi I'm Randy! I am a 38 year old developer in progress. I am currently employed by Camden County Board of Social Services. I have been there since January 2011. I have a wife and 2 boys, aged 1 and 7. I grew up playing sports such as football, hockey, baseball, and soccer. I am an extremely competitive individual and have been named Captain for many teams due to my desire, ability to lead by example and say the right things at the right time. Below are some of my favorite things to do!
        </p>
        <ul>
            <li>
                Playing with my 2 boys
            </li>
            <li>
                Watching/Playing sports
            </li>
            <li>
                Gaming
            </li>
            <li>
                Fantasy Football
            </li>
        </ul>
        <p>
            
        </p>
    </section>
    <img src={process.env.PUBLIC_URL + 'images/selfimage.jpg'}></img>
      </div>
      </main>
    )
}