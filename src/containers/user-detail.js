import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
  constructor (props) {
    super(props)
    this.state = { isEditing: false, isDeleted: false }
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
    this.save = this.save.bind(this)
  }
  edit () {
    this.setState ( { isEditing: true } )
  }
  remove () {
    this.setState ( { isDeleted: false } )
  }
  save () {
    var newFirst = this.refs.newFirst.value
    , newLast    = this.refs.newLast.value
    , newImg     = this.refs.newImg.value
    , newDes     = this.refs.newDes.value
    this.setState ( { isEditing: false } )
  }
  renderNormal () {
    return (
      <div className="userDetail">
        <div className="presentation">
          <img className="img" src={ this.props.user.thumbnail } alt={ this.props.user.first + this.props.user.last + ' Image' } title={ this.props.user.first + this.props.user.last + ' Image' } />
          <div className="titles">
            <h4 className="name" >{ this.props.user.first } { this.props.user.last }</h4>
            <h5 className="age" >{ this.props.user.age } años</h5>
          </div>
        </div>
        <p><span>Description: </span>{ this.props.user.description }</p>
        <div className="buttons actions">
          <a onClick={ this.edit } className="btn edit">Edit</a>
          <a onClick={ this.remove } className="btn delete">Delete</a>
        </div>
      </div>
    )
  }
  renderForm () {
    return (
      <div className="userDetail">
        <div className="userForm">
          <div>
            <label>First name:</label>
            <input ref="newFirst" type="text" defaultValue={ this.props.user.first } />
            <label>Last name:</label>
            <input ref="newLast" type="text" defaultValue={ this.props.user.last } />
            <label>Image URL:</label>
            <input ref="newImg" type="url" defaultValue={ this.props.user.thumbnail } />
            <label>Description:</label>
            <textarea ref="newDes" type="url" defaultValue={ this.props.user.description }></textarea>
          </div>
          <div className="buttons actions">
            <a onClick={ this.save } className="btn">Save</a>
          </div>
        </div>
      </div>
    )
  }
  render () {
    if (!this.props.user) return ( <h5>Select a user!</h5> )
    if (this.state.isEditing) return this.renderForm()
    else return this.renderNormal()
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);
