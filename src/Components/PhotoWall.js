import React from 'react'
// import React,{Component} from 'react'
import Photo from './Photo';
import Main from './Main';
import {Link} from 'react-router-dom';

// class PhotoWall extends Component
// {
//     render(){
//         return <div className='photogrid'>
//             {this.props.posts.map((posts, index)=><Photo key={index} post={posts}/>)}
//         </div>
//     }
// }

function PhotoWall(props)
{
    return <div>
<Link to='/AddPhoto'>Click here to add pic</Link>
        {/* <a onClick={props.setScreen} href='#AddPhoto'>Click here to add photo</a> */}
                <button onClick={props.setScreen}>+</button>
                <div className='photogrid'>
                        {props.posts.map((posts, index)=><Photo key={index} post={posts} onRemovePhoto={props.onRemovePhoto}/>)}
                    </div>
            </div>
}
export default PhotoWall