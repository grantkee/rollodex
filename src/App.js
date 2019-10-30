import React, {Component} from 'react';
import './App.css';
//import { Recoverable } from 'repl';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { isVerified: false, users: [], showDetails: false }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch ('https://randomuser.me/api?results=50')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(contact => (
      {
        id: `${contact.login.uuid}`,
        username: `${contact.login.username}`,
        firstname: `${contact.name.first}`,
        lastname: `${contact.name.last}`,
        pic: `${contact.picture.thumbnail}`,
        phone: `${contact.cell}`,
        city: `${contact.location.city}`,
        lat: `${contact.location.coordinates.latitude}`,
        long: `${contact.location.coordinates.longitude}`
      }
    )))
    .then(users => this.setState(
      {
        users,
        isVerified: false
      }
    ))
    .catch(error => console.log("parsing failed", error))
  }

  isVerified() {
    console.log('is verified or not here')
  }

  viewUserDetails(){
    //let viewDetails = this.state.showDetails
    console.log('view details toggle button here')
  }

  render() { 
    const {isVerified, users, showDetails} = this.state;
    return ( 
      <div>
        <header>
          <h1>Your Contacts</h1><br></br>
          Verify Friends for Offline Use
          </header>
          <div className="container">
            {users.map(userInfo => {
              const {id, username, firstname, lastname, pic, phone, city, lat, long} = userInfo;
              return (
                <div key={userInfo.id} title={userInfo.username} className="user-profile">
                  {!showDetails ? (
                  <div className="initial-userInfo">
                    {firstname} {lastname}<br></br>
                    <img src={pic} alt={username}></img>
                  </div>
                  ) : (
                  <div className="detailed-userInfo">
                    
                  </div>
                  )}
                </div>
              )
            })}
          </div>
      </div>
     );
  }
}
 
export default User;