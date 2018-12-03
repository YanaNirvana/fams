import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

export default class CreateGroup extends Component {
  state = {
    group: ""
  }

  clickHandler = () => {
    this.props.history.replace("/")
  }

  changeHandler = (e) => {
    this.setState({ group: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    // console.log(this.state.group)

    fetch("http://localhost:3003/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.group
      })
    })
    .then(res => res.json())
    .then(data => this.props.history.push(`/groups/${data.id}`))
  }
  render() {
    return (
      <div>
          <h1>Create New Group</h1>
          <Form onSubmit={e => this.submitHandler(e)}>
            <Form.Field>
              <Input label="Name:" placeholder="Group Name" value={this.state.group} onChange={this.changeHandler}/>
            </Form.Field>
            <Button type="submit" className="button" color="green">Create Group</Button>
          </Form>
          <Button onClick={e => this.clickHandler(e)} content="Home Page" className="button" color="green"/> 
      </div>
    )
  }
}
