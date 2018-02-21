import React from 'react';
import BackButton from './backButton.js'

class Cv extends React.Component {


    render() {
        return (
        

            <div className="expanded-content">
                    <div className="button-container">
                    <button className="back-button" onClick={this.props.action} type="button" >Close</button>
                    </div>
                <h1>John Duncan</h1>
                <h2>January 2018 Codeclan graduate, looking for Junior developer opportunities in the technology industry. I  would love to work with Javascript creating robust web content and in the future help with a meaningful open source project.</h2>
               <br/>
               <h2>Codeclan</h2>
               <p>Object Oriented Programming  - Using solid design principles.</p>
               <p>Ruby - Knowledge of Ruby, I built a budget website using a lightweight framework Sinatra, using test driven development. </p>

            </div>

        )
    }

}

export default Cv;