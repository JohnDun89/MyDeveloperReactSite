import React from 'react';

class TopBar extends React.Component {

    
   render(){

       console.log(this.props.mainTitle)


       const title = this.props.mainTitle 

       return (
           <div id="nav-bar">
               <h1>
               {title}
               </h1>
               </div>
       )
   }
}

export default TopBar;