import React from 'react';
import TopBar from './topBar.js';
import BoxContainer from './boxContainer.js';
import Splash from './splash';


class HomePageContainer extends React.Component {

    // this is needed only to pass information down to a componenet
    constructor(props) {
        super(props);

        this.state = {
        displayMainContent: false,
        mainTitle: ['John Duncan, Junior Developer']
        }
        this.toggleContent = this.toggleContent.bind(this) 
        this.renderContent = this.renderContent.bind(this)
    }

    renderContent() {
            if (this.state.displayMainContent === true) {
                return (
                    <div>
                    < TopBar mainTitle={this.state.mainTitle} />
                    <h1> Codeclan graduate with a special interest in Front End. Enjoys React and SCSS particularily.    </h1>
                    < BoxContainer />
                    </div>
                )
            } else {
                return (
                     <div>       
                     <Splash splashClicked={this.toggleContent} />
                     </div>
                )
            }
    }

    toggleContent() {
        this.setState({displayMainContent: true})
    }

    




 render() {

     return(  
        <div>
             {this.renderContent() || this.toggleContent()}
           
         </div>
     )
 }

}

export default HomePageContainer;