import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'

class UserList extends Component {
  createListItems () {
    return this.props.users.map( (user) => {
      return (
        <li onClick={() => this.props.selectUser(user)} key={user.id} >
          <span className="fa fa-user"></span>
          <a>{ user.first } { user.last }</a>
        </li>
      )
    })
  }

  render () {
    return ( <div className="userList">
      <ul> { this.createListItems() } </ul>
    </div> )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({
    selectUser: selectUser
  }, dispatch )
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList)
