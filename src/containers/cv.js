import React from 'react';


class Cv extends React.Component {


    render() {
        return (
        

            
            <div >
                   
                         <div className="expanded-box-cv">
                    <button className="back-button" onClick={this.props.close} type="button" >Close</button>
                            <h1>John Duncan</h1>
                                <h2>January 2018 Codeclan graduate, looking for Front End Developer opportunities in the technology industry. I  would love to work with React and SCSS.</h2>
                                 <br/>
                            <div className="topline">
                                <h1>Codeclan</h1>
                                <p><b>Object Oriented Programming  </b>- Using solid design principles.</p>
                                    <p><b>Ruby </b>- Knowledge of Ruby, I built a budget website using a lightweight framework Sinatra, using test driven development. </p>
                                    <p><b>Java and android </b>- Familiar with Java, for my project I built a To Do List in android studio.</p>
                                    <p><b>Paired Programming </b>- Navigating and driving with an emphasis on good communication, listening and vocalising my thought process throughout. </p>
                                    <p><b>SQL database </b>- I built a SQL database for my web project with a join table and the appropriate C.R.U.D. queries, all with prepared statements. I created a SQLite database for my Android Projects.</p>
                                    <p><b>JavaScript </b>- Front end Javascript, React and JS Node.</p>
                                    <p><b>CSS, SCSS and HTML </b>- Front end design, flexbox and html.</p>
                                    <p><b>Version Control  </b>- Using Git to save work and revert.  </p>
                                    <p><b>User Experience  </b>- Proto personas, user journeys, wireframes.</p>
                                    <p><b>Unix Style Terminal  </b>- Using the command line to create and delete folders or files and install dependencies. </p>
                                    <p><b>TDD  </b>- Test driven development. Testing Ruby using Minitest and Pry bindings, Java with Junit and Javascript with Mocha. </p>
                                    <p><b>Presentation Skills  </b>- Presenting individual projects and group work to peers and an ability to speak clearly about technical subjects to groups. I gave a short speech at the graduation ceremony to one hundred people .</p>
                                    <br/>
                            </div>  
                            <div className="topline">
                              <h1>Employment </h1>
                                <h2>Freelance Photographer, Edinburgh </h2>
                                    <h3>April 2013 - PRESENT</h3>
                                            <p>Responsible for running all aspects of own business.</p>
                                            <p>Excellent client communication, interpreting briefs. </p>
                                            <p>Work published Internationally.  </p>
                                            <p>Strong visual skills.  </p>
                                            <p>Meticulous planning an eye for detail.  </p>
                                            <p>Marketing for business. </p>
                                <h2>Edinburgh Bicycle Co-Operative, Bike mechanic, sales. </h2>
                                    <h3>April 2015 - July 2017 and April 2012 - July 2013</h3>
                                            <p>Plus five years in customer facing role.  </p>
                                            <p>Excellent sales skills, 96% in secret shopper.  </p>
                                            <p>Clear, delicate, technical communication over warranty issues with customer and buying department. </p>
                                            <p>Sent to company partners to speak about Bike to Work scheme. </p>
                                            <p>Warranty mechanic requiring analytical assessments and problem solving. </p>
                                        <br />
                                <h2>Photographic Retoucher and Photographic Assistant </h2>
                                     <h3>April 2013 - PRESENT</h3>
                                            <p>Professional level Retouching with Adobe Photoshop CC. </p>
                                            <p>Interpreting client briefs. </p>
                                            <p>Regularly assisted world class Photographer. </p>
                                            <p>Logistical planning for shoots and research. </p>
                            </div>
                            <div className="topline">
                                <h1>Education</h1>
                                <h2>CodeClan</h2>
                                    <h3>2017 Sep - 2018 Jan 26th</h3>
                                        <p>Technical 16 Week Education.</p> 
                                <h2>University Of Gloucestershire</h2>
                                <h3>2007 - 2011</h3>
                                        <p>BA hons 2:1 Photojournalism and Documentary Photography. </p>
                                        <br/>
                            </div>
                            <div className="topline">
                                <h1>Interests</h1>
                                        <p>I love enduro mountain biking and road cycling equally and experimenting with CGI software like Blender. I am also teaching myself Illustrator. </p>

                            </div>
                          </div>  
                    </div>
            

        )
    }

}

export default Cv;