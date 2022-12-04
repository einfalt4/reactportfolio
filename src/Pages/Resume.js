import React from 'react';


function Resume(){
    return(
        <main class="container">
            <h2 className='subtitle'>Resume</h2>
            <section className="">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ60V36pg6QKls0Hh0qZNkLshkEhYw3osWqhMUSuhOI8feC9D5CJZTTmhiRKKSxuGenbhN4ePgBtcRy/pub?embedded=true"></iframe>
            </section>
            <br />
            <a href="./resume.pdf" download>Resume Download</a>
        </main>
    )
}

export default Resume;
