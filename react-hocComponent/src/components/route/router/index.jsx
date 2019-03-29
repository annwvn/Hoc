import React from 'react'
import Rout from '../route'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

const ListItem = (props) =>{
    let {items,index}= props
    console.log(props);
    
    return <li key={index}>{items.name}</li>
}


class Load extends React.Component{
    constructor(params) {
        super()
        this.state={
            list:[
                {
                    name:'jui'
                },
                {
                    name:'tfytt'
                }
            ]
        }
    }
    render(){
        return <div>
        <ul>
            {
                this.state.list.map((item,index)=>{
                    return <ListItem items={item} index={index} key={index}></ListItem>
                })
            }
        </ul>

        <Router>
            <Switch>    
            <p><Link to="/load">信息</Link></p>
            {
                Rout.length && Rout.map((item,index)=>{
                    return <Route exact path={item.path} component={item.component} key={index}></Route>
                })
            }
            </Switch>
        </Router>
        </div>
    }
}

export default Load