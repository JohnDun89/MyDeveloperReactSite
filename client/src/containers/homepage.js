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
        this.removeSplash = this.removeSplash.bind(this) 
    }

    removeSplash() {
        this.setState({ displayMainContent: true })
        console.log('splash clicked')
    }


 render() {
     return(
        <div>
            <Splash splashClicked={this.removeSplash}/>
            < TopBar mainTitle={this.state.mainTitle} />
            <h1> Codeclan graduate with a special interest in Front End. Enjoys React and SCSS particularily.    </h1>

                < BoxContainer />
            </div>

        

     )
 }

}

export default HomePageContainer;