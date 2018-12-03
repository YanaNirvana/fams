import React, { Component } from 'react'
import GroupTile from './GroupTile'
import { Button } from "semantic-ui-react"


class Home extends Component {
   state = {
       path: "",
       groups: []
   }

    clickHandler = (e) => {
        this.props.history.replace("/groups")
    }

    componentDidMount(){
        fetch("http://localhost:3003/groups")
        .then(res => res.json())
        .then(data => this.setState({ groups: data}))
    }

    render(){
        let allGroups = this.state.groups.map(group => {
            return(<GroupTile 
                    key={group.id}
                    group={group}
                    props={this.props}
                    />)
        })
        return (<div>
                    <h1>You're Home</h1>
                    {allGroups}
                    <Button onClick={e => this.clickHandler(e)} content="My Groups" className="button" color="green"/> 
                <br></br>
                </div>)

    }
}

export default Home