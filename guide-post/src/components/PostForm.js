import React from 'react';

export default class PostForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            location: "",
            duration: "",
            description: "",
            rating: 0
        }
    }

    submitNewPost = e => {
        e.preventDefault();
        this.props.addPost(this.state)

        this.setState({
            name: "",
            location: "",
            duration: "",
            description: "",
            rating: 0
        })
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="postform">
                <h1>Hello From the PostForm</h1>
                <form onSubmit={this.submitNewPost}>
                    <input
                        onChange={this.handleChanges}
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="name"
                    />
                    <input
                    onChange={this.handleChanges}
                        type='text'
                        name='location'
                        value={this.state.location}
                        placeholder='location'
                    />
                    <input
                    onChange={this.handleChanges}
                        type='text'
                        name='description'
                        value={this.state.description}
                        placeholder='description'
                    />
                    <button type='submit'>Submit</button>
                    <input
                        type='radio'
                        name='duration'
                        placeholder='duration'
                    />
                    <input
                        type='checkbox'
                        name='rating'
                        placeholder='rating'
                    />
                </form>
            </div>
        );
    }
}