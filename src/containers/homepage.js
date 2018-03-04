import React from 'react';
import TopBar from './topBar.js';
import BoxContainer from './boxContainer.js';
import Splash from './splash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Bio from './bio.js'

class HomePageContainer extends React.Component {

    // this is needed only to pass information down to a componenet
    constructor(props) {
        super(props);

        this.state = {
        displayMainContent: false,
        mainTitle: ['John Duncan, Junior Developer'],
        introText: ['John Duncan', 'Junior Full Stack Developer']
        }
        this.toggleContent = this.toggleContent.bind(this) 
        this.renderContent = this.renderContent.bind(this)
    }

    renderContent() {
        const splash = [1].map((number) =>
            <div key={number.toString()}>
                <Splash splashClicked={this.toggleContent} introText={this.state.introText} />
            </div>)

            if (this.state.displayMainContent === true) {
                return (
                    <ReactCSSTransitionGroup
                        transitionEnter={true}
                        transitionName="introduction"
                        transitionAppear={true}
                        transitionAppearTimeout={1500}

                        transitionLeaveTimeout={1500}
                        transitionEnterTimeout={1500}
                        >

                    <div>
                    < TopBar mainTitle={this.state.mainTitle} />
                    < Bio />
                    < BoxContainer />
                    </div>
                     </ReactCSSTransitionGroup >
                )
            } else {
                return (
                        <div>
                        {splash}
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