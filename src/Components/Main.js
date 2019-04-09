import React, {Component} from 'react'
import Title from './Title';
import Photowall from './PhotoWall';
//import D1 from '../Image/DSC_0758.jpg';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

// const posts=[{
//     id:"0",
//     description: "beautiful landscape",
//     imageLink: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"

// },
// {
//     id:"1",
//     description: "beautiful Akku",
//     imageLink: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
// }
// ,{
//     id:"2",
//     description: "On vacation",
//     imageLink: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
// }
// ]

class Main extends Component {
    constructor()
    {
        
        super()
        // this.state={
            

        // }
        //this.removePhoto = this.removePhoto.bind(this);
        console.log('constructor')
    }

    // removePhoto(postRemoved)
    // {
    //     console.log(postRemoved.description);
    //     this.setState((state)=> ({
    //         posts: state.posts.filter(post => post !== postRemoved)
    //     }))
    //     console.log('removephoto')
    // }

    // addPhoto(photoObj)
    // {
    //     console.log(photoObj);

    // }
    
    render()
    {
        console.log(this.props.posts)
        console.log('render')
        return <div>
            <Route exact path='/' render={()=>(
                    <div>
                            <Title title = {'Photowall'}/>
                            {/* <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} setScreen={this.setScreen}/> */}
                    </div>
            )}></Route>
            {/* <Route path='/AddPhoto' render={()=>(
                    <div>
                            <AddPhoto/>
                    </div>
            )}></Route>  */}
            /*<Route path='/AddPhoto' Component={'AddPhoto'}></Route>  //for single Component*/
                    
            </div>

            
    }
}
/*
class Main extends Component {
    constructor()
    {
        super()
        this.state={
            posts:[{
                id:"0",
                description: "beautiful landscape",
                imageLink: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
            
            },
            {
                id:"1",
                description: "beautiful Akku",
                imageLink: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
            }
            ,{
                id:"2",
                description: "On vacation",
                imageLink: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
            }
            ],screen: 'photos'

        }
        this.removePhoto = this.removePhoto.bind(this);
        this.setScreen = this.setScreen.bind(this);
        console.log('constructor')
    }

    removePhoto(postRemoved)
    {
        console.log(postRemoved.description);
        this.setState((state)=> ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
        console.log('removephoto')
    }

    setScreen()
        {
            this.setState({
                screen: 'addPhoto'
            })
        }
    
    
    render()
    {
        console.log('render')
        return <div>{
                    this.state.screen==='photos' && (
                    <div>
                            <Title title = {'Photowall'}/>
                            <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} setScreen={this.setScreen}/>
                    </div>
                    )
        }
        {
            this.state.screen==='addPhoto' && (
                    <div>
                            <AddPhoto/>
                    </div>
            )
        }
            </div>

            
    }
}*/
export default Main
