import React, {Component} from 'react';
import './App.css';
//import { Recoverable } from 'repl';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], isVerified: false, viewDetails: false}
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch ('https://randomuser.me/api?results=50')
    .then(response => response.results.json())
    .then(contact => this.setState(
      {
        users: contact,
        isVerified: false,
        viewDetails: false
      }
    ))
    .catch(error => console.log("parsing failed", error))
  }

  sortContacts = () => {
    const newContact = this.state.users.map((contact) => {
      return (
        <div className="basic-userInfo">
          {contact.name.first} {contact.name.last}
          <img src={contact.picture.thumbnail} alt={contact.login.username} className="user-thumbnail-basic"></img>
          <button className="details-button" onClick={this.viewUserDetails}>Details</button>
        </div>
      )
    })
    return newContact
  }

  isVerified = (e) => {
    console.log('is verified or not here')
  }

  viewUserDetails = (id) => {
    //let viewDetails = this.state.showDetails
    console.log('view details toggle button here')
      this.setState({showDetails: !this.showDetails})
  }

  render() { 
    return (
      <div>
        <header>
          <h1>Your Contacts</h1><br/>
          Verify Friends for Offline Use
        </header>
           {this.sortContacts()}
      </div>
    )

    // const {isVerified, users, showDetails} = this.state;
    // return (
    //   <div>
    //     <header>
    //       <h1>Your Contacts</h1><br></br>
    //       Verify Friends for Offline Use
    //       </header>
    //       <div className="container">
    //         {users.map(userInfo => {
    //           const {id, username, firstname, lastname, pic, phone, city, lat, long} = userInfo;
    //           return (
    //             <div key={userInfo.id} title={userInfo.username} className="user-profile">
    //               {!this.state.showDetails ? (
    //               <div className="basic-userInfo">
    //                 {firstname} {lastname}
    //                 <img src={pic} alt={username} className="user-thumbnail-basic"></img>
    //                 <button className="details-button" onClick={this.viewUserDetails(userInfo.id)}>Details</button>
    //               </div>
    //               ) : (
    //               <div className="detailed-userInfo">
    //                 {firstname} {lastname}
    //                 <img src={pic} alt={username} className="user-thumbnail-detailed"></img>
    //                 <ul>
    //                   <li>{username}</li>
    //                   <li>{phone}</li>
    //                   <li>{city}</li>
    //                 </ul>
    //               </div>
    //               )}
    //             </div>
    //           )
    //         })}
    //       </div>
    //   </div>
    //  );
  }
}
 
export default User;