import React from 'react'

class Link extends React.Component {
        constructor(props){
            super(props)
        this.linkClicked = this.linkClicked.bind(this)
        }


    componentDidMount() {
      
    }

    linkClicked() {
        console.log("clicked")
    }  

    render() {

        const title = this.props.text[0]
        const link = this.props.text[1]
        const keywords = this.props.text[2]
        return (

            <div className="list-item" onClick={this.linkClicked}>
                <div >
                    
                    <h1 className="li-title">{title}</h1>
                    <h2 className="li-keywords">{keywords}</h2>
                </div>
            </div>
        )
    }
}

export default Link;
