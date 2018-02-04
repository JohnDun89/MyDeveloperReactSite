import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'

class BoxContainer extends React.Component {

    render() {
        return (
            <div id="flex-parent-main">
                    <BoxOne />
                    <BoxTwo />
                    <BoxThree />
                    <BoxFour />
            </div>
        )
    }

}

export default BoxContainer;