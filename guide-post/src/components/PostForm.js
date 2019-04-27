import React from 'react';

export default class PostForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            location: "",
            duration: "",
            description: "",
            rating: 0
        }
    }

    render(){
        return(
            <div>
                <h1>Hello From the PostForm</h1>
            </div>
        );
    }
}