import React, {Component} from 'react';
import './App.css';
//import { Recoverable } from 'repl';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], viewDetails: {}}
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch ('https://randomuser.me/api?results=50')
    .then(response => response.json())
    .then(contact => this.setState(
      {
        users: contact.results
      }
    ))
    .catch(error => console.log("parsing failed", error))
  }

  sortContacts = () => {
    const newContact = this.state.users.map((contact) => {
      return (
        <div className="basic-userInfo" key={contact.login.uuid}>
          {contact.name.first} {this.state.viewDetails[contact.login.uuid] && (contact.name.last)}
          <img src={contact.picture.thumbnail} alt={contact.login.username} className="user-thumbnail-basic"></img>
          <button className="details-button" onClick={() => this.viewUserDetails(contact.login.uuid)}>{this.state.viewDetails[contact.login.uuid] ? "Hide" : "Show"} Details</button>
        </div>
      )
    })
    return newContact
  }

  isVerified = (e) => {
    console.log('is verified or not here')
  }

  viewUserDetails = (id) => {
    let showDetails = {...this.state.viewDetails}
    showDetails[id] = !showDetails[id]
      this.setState({viewDetails: showDetails})
  }

  render() { 
    return (
      <>
        <header>
          <h1>Your Contacts</h1><br/>
          Verify Friends for Offline Use
        </header>
        <div className="container">
           {this.sortContacts()}
        </div>
      </>
    )
  }
}
 
export default User;