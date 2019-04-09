import React, {Component} from 'react'

class AddPhoto extends Component
{
    constructor()
    {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event)
    {
        event.preventDefault();
        console.log(event.target.elements.link.value);
    }

    render()
    {
        return (
        <div>
            <h1>Add new photo</h1>
            <div className='form'>
            <form onSubmit={this.handleSubmit}>
            
            <input type='text' name='link'></input>
            <input type='text' name='description'></input>
            <button>Post</button>
            </form>
            </div>
        </div>
        )
    }
}

export default AddPhoto