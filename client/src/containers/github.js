import React from 'react';
import Link from './link.js';

class Github extends React.Component {
    constructor(props) {
       super(props)
        this.props ={
            Github: ['GitHub','https://github.com/JohnDun89'],
            Budgeting: ['Budgeting App','https://github.com/JohnDun89/budgeting_app'],
            Cycling: ['Cycling Route Finder','https://github.com/JohnDun89/js-group-project'],
            ToDo: ['Android To Do List', 'https://github.com/JohnDun89/AndroidToDoList'],
            ReactProject: ['This Site', 'https://github.com/JohnDun89/MyDeveloperReactSite'],
            Pagination: ['Pagination with Game of Thrones API','https://github.com/JohnDun89/Game-0f-Thrones-Christmas-Project']
        }
    }

   

    render() {


        return (
            <div >
                <button className="back-button" onClick={this.props.close} type="button" >Close</button>
                <div >
                    <h1>Links to git hub and specific projects</h1>
                </div>
            </div>
        )
    }
}

export default Github;
