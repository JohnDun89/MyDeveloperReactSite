import React from 'react';
import TopBar from './topBar.js';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'


class HomePageContainer extends React.Component {

    constructor() {
        super()
    }

 render() {
     return(
        <div>
            
            < TopBar />
            <h1> Hello World!   </h1>
            <div id="flex-parent-main">
                <BoxOne />
                <BoxTwo />
                <BoxThree />
                <BoxFour />
            </div>

        </div>

     )
 }

}

export default HomePageContainer;