import React from 'react';
import TopBar from './topBar.js';

class HomePageContainer extends React.Component {

    constructor() {
        super()
    }

 render() {
     return(
        <div>
            
            < TopBar />
            
            <h1> Hello World!   </h1>
        </div>

     )
 }

}

export default HomePageContainer;