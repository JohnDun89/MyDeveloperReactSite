import React from 'react';
import Link from './link.js';

class Github extends React.Component {
    constructor(props) {
       super(props)
        this.state ={
            Github: ['GitHub','https://github.com/JohnDun89','All projects and CodeClan Homeworks.'],
            Budgeting: ['Budgeting App','https://github.com/JohnDun89/budgeting_app','A Budgeting App, built with Ruby, Sinatra, CSS and SQL.'],
            Cycling: ['Cycling Route Finder','https://github.com/JohnDun89/js-group-project','Group Project, using Javascript, NodeJS, MondgoDB and CSS.'],
            ToDo: ['Android To Do List', 'https://github.com/JohnDun89/AndroidToDoList','Android Phone App, Java, Android Studio and SQLite.'],
            ReactProject: ['This Site', 'https://github.com/JohnDun89/MyDeveloperReactSite','This site, React, SCSS and WebGl.'],
            Pagination: ['Pagination with Game of Thrones API','https://github.com/JohnDun89/Game-0f-Thrones-Christmas-Project','']
        }
    }

    render() {

              
        return (
            // this class needs changed so box epands to cover all links
            <div className=" expanded-box" id="git">
                <button className="back-button" onClick={this.props.close} type="button" >Close</button>
                <div  >
                    <h1>Links To My projects</h1>
                    <Link text={this.state.Github} />
                    <Link text={this.state.Budgeting}/>
                    <Link text={this.state.Cycling}/>
                    <Link text={this.state.ToDo}/>
                    <Link text={this.state.ReactProject}/>
                </div>
            </div>
        )
    }
}

export default Github;
