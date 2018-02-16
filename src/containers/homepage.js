import React from 'react';
import TopBar from './topBar.js';
import BoxContainer from './boxContainer.js';


class HomePageContainer extends React.Component {

    // this is needed only to pass information down to a componenet
    constructor(props) {
        super(props);

        this.state = {
        mainTitle: ['John Duncan, Junior Developer']
        }
    }


 render() {
     return(
        <div>
            
            < TopBar mainTitle={this.state.mainTitle} />
            <h1> Codeclan graduate with a special interest in Front End. Enjoys React and SCSS particularily.    </h1>
                < BoxContainer />
            </div>

        

     )
 }

}

export default HomePageContainer;