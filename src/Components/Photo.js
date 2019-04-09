import React from 'react'

function Photo(props)
    {
        const post = props.post
        return <figure className='figure'>
        <img className='photo' src={post.imageLink} alt={post.description}/>
        <figcaption>{post.description}</figcaption>
        <div>
            <button onClick = {() => {
                props.onRemovePhoto(post)
                //alert(props.description)
            }}>Remove</button></div>
        </figure>
    }

//import React, {Component} from 'react'

// class Photo extends Component
// {
    
//     render()
//     {
//         const post = this.props.post
//         return <figure className='figure'>
//         <img className='photo' src={post.imageLink} alt={post.description}/>
//         <figcaption>{post.description}</figcaption>
//         <div><button>Remove</button></div>
//         </figure>
//     }
// }

export default Photo 