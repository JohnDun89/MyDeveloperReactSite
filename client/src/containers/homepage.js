import React from 'react';
import TopBar from './topBar.js';
import BoxContainer from './boxContainer.js';
import Splash from './splash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
                        >

                    <div>
                    < TopBar mainTitle={this.state.mainTitle} />
                    <h1> Codeclan graduate with a special interest in Front End. Enjoys React and SCSS particularily.    </h1>
                    < BoxContainer />
                    </div>
                     </ReactCSSTransitionGroup >
                )
            } else {
                return (
                     <div> 
                        <ReactCSSTransitionGroup
                            transitionName="splash"
                            transitionLeave={true}
                            transitionLeaveTimeout={1000}>

                        {splash}                    
                    </ReactCSSTransitionGroup>
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